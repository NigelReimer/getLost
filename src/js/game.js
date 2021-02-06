/// <reference path='typedefs.js'/>

/**
 * Represents a game of getLost with rules defined by given options.
 */
class GetLostGame {
  /**
   * Creates a game with the given options.
   * @param {GetLostOptions} options A set of options that specify how the game is played.
   */
  constructor(options) {
    this.buttonAction = document.getElementById('buttonAction');
    this.buttonToggle = document.getElementById('buttonToggle');
    this.divArrow = document.getElementById('divArrow');
    this.divDisplay = document.getElementById('divDisplay');
    this.inputNotes = document.getElementById('inputNotes');

    this.destination = new google.maps.Circle();
    this.degreeRadians = Math.PI / 180;
    this.degreeMeters = this.degreeRadians * 6371000;
    /** @type {google.maps.Circle[]} */
    this.exclusions = [];
    this.gameStates = {STARTED: 'started', GUESSED: 'guessed', FINISHED: 'finished'}
    this.gameState = this.gameStates.FINISHED;
    this.options = options;
    this.startDate = new Date();

    /** @type {google.maps.MapOptions} */
    const mapOptions = {
      center: this.options.defaultCenter,
      disableDefaultUI: true,
      draggableCursor: 'crosshair',
      draggingCursor: 'all-scroll',
      keyboardShortcuts: false,
      maxZoom: 17,
      minZoom: 3,
      zoom: this.options.defaultZoom,
    }

    /** @type {google.maps.StreetViewPanoramaOptions} */
    const panoramaOptions = {
      disableDefaultUI: true,
      showRoadLabels: false,
      visible: false,
    }

    this.map = new google.maps.Map(this.divDisplay, mapOptions);
    this.panorama = new google.maps.StreetViewPanorama(this.divDisplay, panoramaOptions);

    /** @type {google.maps.MarkerOptions} */
    const guessMarkerOptions = {
      clickable: false,
      icon: 'svg/guess.svg',
      map: this.map,
      opacity: 0.8,
      zIndex: 0,
    }

    /** @type {google.maps.MarkerOptions} */
    const startMarkerOptions = {
      clickable: false,
      icon: 'svg/start.svg',
      map: this.map,
      opacity: 0.8,
      zIndex: 1,
    }

    /** @type {google.maps.PolylineOptions} */
    const polylineOptions = {
      clickable: false,
      map: this.map,
      strokeOpacity: 0.7,
      strokeWeight: 3,
      visible: false,
    }

    this.guessMarker = new google.maps.Marker(guessMarkerOptions);
    this.startMarker = new google.maps.Marker(startMarkerOptions);
    this.polyline = new google.maps.Polyline(polylineOptions);

    document.addEventListener('keyup', (event) => this.onKeyup(event.code));
    this.buttonAction.addEventListener('click', () => this.onClickAction());
    this.buttonToggle.addEventListener('click', () => this.onClickToggle());
    this.map.addListener('click', (event) => this.onClickMap(event.latLng));
    this.panorama.addListener('pov_changed', () => this.onPovChanged());
  }

  /**
   * Attempts to start a new round by selecting a random destination and location within, and requesting a panorama there.
   */
  attemptRound() {
    this.destination = this.randomDestination(this.options.destinations, this.exclusions);

    /** @type {google.maps.StreetViewLocationRequest} */
    const request = {
      location: this.randomLocation(this.destination),
      preference: google.maps.StreetViewPreference.NEAREST,
      radius: this.options.requestRadius,
      source: google.maps.StreetViewSource.OUTDOOR,
    };

    new google.maps.StreetViewService().getPanorama(request, (data, status) => this.onResponse(data, status));
  }

  /**
   * Selects a random destination from a given array which is not nearby any given exclusions.
   * @param {google.maps.Circle[]} destinations An array of possible destinations.
   * @param {google.maps.Circle[]} exclusions An array of exclusions which prevent nearby destinations from being selected.
   * @returns {google.maps.Circle}
   */
  randomDestination(destinations, exclusions) {
    let destination;

    do {
      destination = destinations[Math.floor(Math.random() * destinations.length)];
    } while (this.isDestinationExcluded(destination, exclusions));

    return destination;
  }

  /**
   * Checks if a given destination is nearby any exclusions, returns True if the destination is excluded.
   * @param {google.maps.Circle} destination The destination.
   * @param {google.maps.Circle[]} exclusions An array of exclusions which prevent nearby destinations from being selected.
   * @returns {boolean}
   */
  isDestinationExcluded(destination, exclusions) {
    return exclusions.some((exclusion) => {
      const distance = google.maps.geometry.spherical.computeDistanceBetween(destination.getCenter(), exclusion.getCenter());
      const radiiSum = destination.getRadius() + exclusion.getRadius();

      return distance < radiiSum;
    });
  }

  /**
   * Randomly selects a point within the given destination. Adapted from the solution found here: {@link https://stackoverflow.com/a/43202522}
   * @param {google.maps.Circle} destination The destination in which a location will be selected.
   * @returns {google.maps.LatLng}
   */
  randomLocation(destination) {
    const center = destination.getCenter();
    const angle = Math.random() * 2 * Math.PI;
    const radius = destination.getRadius() * Math.sqrt(Math.random());
    const lat = center.lat() + radius * Math.sin(angle) / this.degreeMeters;
    const lng = center.lng() + radius * Math.cos(angle) / (this.degreeMeters * Math.cos(center.lat() * this.degreeRadians));

    return new google.maps.LatLng(lat, lng);
  }

  /**
   * Handles the response of a panorama request, either by starting the round if successful or aborting it if not.
   * @param {google.maps.StreetViewPanoramaData} data The representation of a panorama returned from the provider.
   * @param {google.maps.StreetViewStatus} status The status returned by the StreetViewService on completion of a Street View request.
   */
  onResponse(data, status) {
    if (status === google.maps.StreetViewStatus.OK) {
      this.startRound(data.location.latLng);
    } else {
      this.abortRound();
    }
  }

  /**
   * Using a given position, sets up the game to start a new round.
   * @param {google.maps.LatLng} position The position of the Street View panorama start location.
   */
  startRound(position) {
    this.panorama.setPosition(position);
    this.panorama.setPov({heading: 0, pitch: 0});
    this.panorama.setZoom(0);
    this.inputNotes.value = '';
    this.updateExclusions(this.destination);
    this.gameState = this.gameStates.STARTED;
    this.onClickToggle();
    this.startDate = new Date();
    this.map.setCenter(this.options.defaultCenter);
    this.map.setZoom(this.options.defaultZoom);
    this.guessMarker.setVisible(false);
    this.startMarker.setVisible(false);
    this.startMarker.setPosition(position);
    this.polyline.setVisible(false);
  }

  /**
   * Updates the list of exclusions with a given destination. New exclusions are added until the maximum number as defined in the options,
   * then the oldest exlcusion is shifted out upon each new entry.
   * @param {google.maps.Circle} destination The destination upon which the exclusion will be based.
   */
  updateExclusions(destination) {
    destination.setRadius(destination.getRadius() * this.options.exclusionMultiplier);
    this.exclusions.push(destination);

    if (this.exclusions.length > this.options.maxExclusions) {
      this.exclusions.shift();
    }
  }

  /**
   * Aborts the attempted round, and sets the game to be ready to attempt another round.
   */
  abortRound() {
    this.inputNotes.value = 'Failed to find a valid panorama, press next to try again';
    this.map.setCenter(this.options.defaultCenter);
    this.map.setZoom(this.options.defaultZoom);
    this.guessMarker.setPosition(this.options.defaultCenter);
    this.guessMarker.setVisible(true);
    this.startMarker.setPosition(this.options.defaultCenter);
    this.startMarker.setVisible(true);
    this.polyline.setVisible(false);
    this.panorama.setVisible(false);
    this.gameState = this.gameStates.FINISHED;
    this.updateControls();
  }

  /**
   * Completes the round by scoring the current round and displaying the end of round information to the user.
   */
  finishRound() {
    const time = (new Date() - this.startDate) / 1000;
    const guessPosition = this.guessMarker.getPosition();
    const startPosition = this.startMarker.getPosition();
    const distance = google.maps.geometry.spherical.computeDistanceBetween(guessPosition, startPosition);

    this.inputNotes.value = [
      startPosition.lat().toFixed(4),
      startPosition.lng().toFixed(4),
      (distance > 1000) ? `${(distance / 1000).toFixed(1)}km` : `${Math.round(distance)}m`,
      `${`0${Math.floor(time / 60)}`.slice(-2)}:${`0${Math.round(time) % 60}`.slice(-2)}`,
      this.options.scoreRound(distance, time),
    ].join(', ');

    this.startMarker.setVisible(true);
    this.polyline.setPath([guessPosition, startPosition]);
    this.polyline.setVisible(true);
    this.map.fitBounds(new google.maps.LatLngBounds().extend(startPosition).extend(guessPosition), {bottom: 192, left: 64, right: 64, top: 64});
    this.gameState = this.gameStates.FINISHED;
    this.updateControls();
  }

  /**
   * Updates the appearance of the controls to match the current view and game state.
   */
  updateControls() {
    if (this.panorama.getVisible()) {
      this.buttonAction.className = 'background-compass';
      this.buttonToggle.className = 'background-map';
      this.divArrow.className = 'background-arrow';
      this.inputNotes.className = 'notes-default';
    } else {
      this.buttonToggle.className = 'background-camera';
      this.divArrow.className = '';
      this.inputNotes.className = 'notes-inverted';

      switch(this.gameState) {
        case this.gameStates.STARTED:
          this.buttonAction.className = 'background-marker';
          break;
        case this.gameStates.GUESSED:
          this.buttonAction.className = 'background-check';
          break;
        case this.gameStates.FINISHED:
          this.buttonAction.className = 'background-next';
      }
    }
  }

  /**
   * Handles a keyup event by carrying out actions depending on which key was pressed.
   * @param {string} code The code of the key that was pressed.
   */
  onKeyup(code) {
    const isNotesFocus = document.activeElement === this.inputNotes;

    switch(code) {
      case 'ControlLeft':
        if (!isNotesFocus) {
          this.onClickAction();
        }
        break;
      case 'Enter':
        if (isNotesFocus) {
          this.inputNotes.blur();
        } else {
          this.inputNotes.focus();
        }
        break;
      case 'Space':
        if (!isNotesFocus) {
          this.onClickToggle();
        }
    }
  }

  /**
   * Handles a click of the action button by carrying out the appropriate action based on the current view and game state.
   */
  onClickAction() {
    if (this.panorama.getVisible()) {
      this.panorama.setPosition(this.startMarker.getPosition());
    } else {
      switch(this.gameState) {
        case this.gameStates.STARTED:
          this.onClickMap(this.map.getCenter());
          break;
        case this.gameStates.GUESSED:
          this.finishRound();
          break;
        case this.gameStates.FINISHED:
          this.attemptRound();
      }
    }
  }

  /**
   * Handles a click of the toggle button by switching between the Map or Panorama view, and updating the controls.
   */
  onClickToggle() {
    document.activeElement.blur();
    this.panorama.setVisible(!this.panorama.getVisible());
    this.updateControls();
  }

  /**
   * Handles a click of the map view by placing or moving the guess marker to the given position.
   * @param {google.maps.LatLng} position The position where the map was clicked.
   */
  onClickMap(position) {
    switch(this.gameState) {
      case this.gameStates.STARTED:
        this.guessMarker.setPosition(position);
        this.guessMarker.setVisible(true);
        this.gameState = this.gameStates.GUESSED;
        this.updateControls();
        break;
      case this.gameStates.GUESSED:
        this.guessMarker.setPosition(position);
    }
  }

  /**
   * Handles a change of the panorama point of view by rotating the compass arrow to point towards the corresponding heading.
   */
  onPovChanged() {
    this.divArrow.style.transform = `rotate(${this.panorama.getPov().heading}deg)`;
  }
}
