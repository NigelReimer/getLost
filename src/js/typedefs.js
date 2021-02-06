/**
 * Options object used to define the properties that must be set for a game.
 * @typedef GetLostOptions
 * @property {google.maps.LatLng} defaultCenter The default position at which the map view will be centered.
 * @property {number} defaultZoom The default zoom level at which the map view will be set.
 * @property {number} exclusionMultiplier The multiplier applied to a destination's radius when creating its corresponding exclusion.
 * @property {number} maxExclusions The maximum number of exclusions before the oldest entries start being removed.
 * @property {number} requestRadius The maximum acceptable radius in meters in which to search for a panorama.
 * @property {function(number, number):string} scoreRound A function that calculates the score of a completed round using the given distance in meters and time in seconds, then returns a string representing the score.
 * @property {google.maps.Circle[]} destinations An array of possible destinations for each round, represented by Circle objects.
 */

/**
 * A circle on the Earth's surface; also known as a "spherical cap".
 * {@link https://developers.google.com/maps/documentation/javascript/reference/polygon#Circle}
 */
google.maps.Circle = class {
  /**
   * Returns the center of this circle.
   * @returns {google.maps.LatLng}
   */
  getCenter() {}

  /**
   * Returns the radius of this circle (in meters).
   * @returns {number}
   */
  getRadius() {}
}

/**
 * Returns the distance, in meters, between two LatLngs. You can optionally specify a custom radius. The radius defaults to the radius of the Earth.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/geometry#spherical.computeDistanceBetween}
 * @param {google.maps.LatLng} from
 * @param {google.maps.LatLng} to
 * @returns {number}
 */
google.maps.geometry.spherical.computeDistanceBetween = (from, to) => {};

/**
 * A LatLng is a point in geographical coordinates: latitude and longitude.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng}
 */
google.maps.LatLng = class {
  /**
   * Returns the latitude in degrees.
   * @returns {number}
   */
  lat() {}

  /**
   * Returns the longitude in degrees.
   * @returns {number}
   */
  lng() {}
}

/**
 * A LatLngBounds instance represents a rectangle in geographical coordinates, including one that crosses the 180 degrees longitudinal meridian.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds}
 */
google.maps.LatLngBounds = class {
  /**
   * Extends this bounds to contain the given point.
   * @param {google.maps.LatLng} point
   * @returns {google.maps.LatLngBounds}
   */
  extend(point) {}
}

/**
 * {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map}
 */
google.maps.Map = class {
  /**
   * Creates a new map inside of the given HTML container, which is typically a DIV element.
   * @param {HTMLElement} mapDiv
   * @param {google.maps.MapOptions} opts
   */
  constructor(mapDiv, opts) {}

  /**
   * Adds the given listener function to the given event name. Returns an identifier for this listener that can be used with google.maps.event.removeListener.
   * @param {string} eventName
   * @param {function(google.maps.MapMouseEvent):void} handler
   * @returns {google.maps.MapsEventListener}
   */
  addListener(eventName, handler) {}

  /**
   * Sets the viewport to contain the given bounds.
   * @param {google.maps.LatLngBounds} bounds
   * @param {google.maps.Padding} padding
   */
  fitBounds(bounds, padding) {}

  /**
   * Returns the position displayed at the center of the map. Note that this LatLng object is not wrapped.
   * @returns {google.maps.LatLng}
   */
  getCenter() {}

  /**
   * @param {google.maps.LatLng} latLng
   */
  setCenter(latLng) {}

  /**
   * @param {number} zoom
   */
  setZoom(zoom) {}
}

/**
 * This object is returned from various mouse events on the map and overlays, and contains all the fields shown below.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/map#MapMouseEvent}
 * @typedef google.maps.MapMouseEvent
 * @property {Event} domEvent The corresponding native DOM event.
 * @property {google.maps.LatLng} latLng The latitude/longitude that was below the cursor when the event occurred.
 */

/**
 * MapOptions object used to define the properties that can be set on a Map.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions}
 * @typedef google.maps.MapOptions
 * @property {google.maps.LatLng} center The initial Map center.
 * @property {boolean} disableDefaultUI Enables/disables all default UI buttons. May be overridden individually.
 * @property {string} draggableCursor The name or url of the cursor to display when mousing over a draggable map.
 * @property {string} draggingCursor The name or url of the cursor to display when the map is being dragged.
 * @property {boolean} keyboardShortcuts If false, prevents the map from being controlled by the keyboard.
 * @property {number} maxZoom The maximum zoom level which will be displayed on the map.
 * @property {number} minZoom The minimum zoom level which will be displayed on the map.
 * @property {number} zoom The initial Map zoom level.
 */

/**
 * An event listener, created by google.maps.event.addListener() and friends.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/event#MapsEventListener}
 * @typedef google.maps.MapsEventListener
 */

/**
 * {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker}
 */
google.maps.Marker = class {
  /**
   * Returns the position of this marker.
   * @returns {google.maps.LatLng}
   */
  getPosition() {}

  /**
   * @param {google.maps.LatLng} latLng
   */
  setPosition(latLng) {}

  /**
   * @param {boolean} visible
   */
  setVisible(visible) {}
}

/**
 * MarkerOptions object used to define the properties that can be set on a Marker.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions}
 * @typedef google.maps.MarkerOptions
 * @property {boolean} clickable If true, the marker receives mouse and touch events.
 * @property {string} icon Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url.
 * @property {google.maps.Map} map Map on which to display Marker.
 * @property {number} opacity The marker's opacity between 0.0 and 1.0.
 * @property {number} zIndex All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values.
 */

/**
 * {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Padding}
 * @typedef google.maps.Padding
 * @property {number} bottom Padding for the bottom, in pixels.
 * @property {number} left Padding for the left, in pixels.
 * @property {number} right Padding for the right, in pixels.
 * @property {number} top Padding for the top, in pixels.
 */

/**
 * A polyline is a linear overlay of connected line segments on the map.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/polygon#Polyline}
 */
google.maps.Polyline = class {
  /**
   * Create a polyline using the passed PolylineOptions, which specify both the path of the polyline and the stroke style to use when drawing the polyline.
   * @param {google.maps.PolylineOptions} opts
   */
  constructor(opts) {}

  /**
   * Sets the path.
   * @param {google.maps.LatLng[]} path
   */
  setPath(path) {}

  /**
   * Hides this poly if set to false.
   * @param {boolean} visible
   */
  setVisible(visible) {}
}

/**
 * PolylineOptions object used to define the properties that can be set on a Polyline.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/polygon#PolylineOptions}
 * @typedef google.maps.PolylineOptions
 * @property {boolean} clickable Indicates whether this Polyline handles mouse events.
 * @property {google.maps.Map} map Map on which to display Polyline.
 * @property {number} strokeOpacity The stroke opacity between 0.0 and 1.0.
 * @property {number} strokeWeight The stroke width in pixels.
 * @property {boolean} visible Whether this polyline is visible on the map.
 */

/**
 * A representation of a location in the Street View panorama.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view-service#StreetViewLocation}
 * @typedef google.maps.StreetViewLocation
 * @property {google.maps.LatLng} latLng The latlng of the panorama.
 */

/**
 * A Street View request to be sent with getPanorama. StreetViewLocationRequest lets you search for a Street View panoroma at a specified location.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view-service#StreetViewLocationRequest}
 * @typedef google.maps.StreetViewLocationRequest
 * @property {google.maps.LatLng} location Specifies the location where to search for a Street View panorama.
 * @property {google.maps.StreetViewPreference} preference Sets a preference for which panorama should be found within the radius: the one nearest to the provided location, or the best one within the radius.
 * @property {number} radius Sets a radius in meters in which to search for a panorama.
 * @property {google.maps.StreetViewSource} source Specifies the source of panoramas to search. This allows a restriction to search for just outdoor panoramas for example.
 */

/**
 * Displays the panorama for a given LatLng or panorama ID. A StreetViewPanorama object provides a Street View "viewer" which can be stand-alone within a separate <div> or bound to a Map.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view#StreetViewPanorama}
 */
google.maps.StreetViewPanorama = class {
  /**
   * Creates a panorama with the passed StreetViewPanoramaOptions.
   * @param {HTMLElement} container
   * @param {google.maps.StreetViewPanoramaOptions} opts
   */
  constructor(container, opts) {}

  /**
   * Adds the given listener function to the given event name. Returns an identifier for this listener that can be used with google.maps.event.removeListener.
   * @param {string} eventName
   * @param {Function} handler
   * @returns {google.maps.MapsEventListener}
   */
  addListener(eventName, handler) {}

  /**
   * Returns the current point of view for the Street View panorama
   * @returns {google.maps.StreetViewPov}
   */
  getPov() {}

  /**
   * Returns true if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.
   * @returns {boolean}
   */
  getVisible() {}

  /**
   * Sets the current LatLng position for the Street View panorama.
   * @param {google.maps.LatLng} latLng
   */
  setPosition(latLng) {}

  /**
   * Sets the point of view for the Street View panorama.
   * @param {google.maps.StreetViewPov} pov
   */
  setPov(pov) {}

  /**
   * Sets to true to make the panorama visible. If set to false, the panorama will be hidden whether it is embedded in the map or in its own <div>.
   * @param {boolean} flag
   */
  setVisible(flag) {}

  /**
   * Sets the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.
   * @param {number} zoom
   */
  setZoom(zoom) {}
}

/**
 * The representation of a panorama returned from the provider defined using registerPanoProvider
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view-service#StreetViewPanoramaData}
 * @typedef google.maps.StreetViewPanoramaData
 * @property {google.maps.StreetViewLocation} location Specifies the location meta-data for this panorama.
 */

/**
 * Options defining the properties of a StreetViewPanorama object.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view#StreetViewPanoramaOptions}
 * @typedef google.maps.StreetViewPanoramaOptions
 * @property {boolean} disableDefaultUI Enables/disables all default UI. May be overridden individually.
 * @property {boolean} showRoadLabels The display of street names on the panorama.
 * @property {boolean} visible If true, the Street View panorama is visible on load.
 */

/**
 * A point of view object which specifies the camera's orientation at the Street View panorama's position. The point of view is defined as heading and pitch.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view#StreetViewPov}
 * @typedef google.maps.StreetViewPov
 * @property {number} heading The camera heading in degrees relative to true north. True north is 0°, east is 90°, south is 180°, west is 270°.
 * @property {number} pitch The camera pitch in degrees, relative to the street view vehicle. Ranges from 90° (directly upwards) to -90° (directly downwards).
 */

/**
 * Options that bias a search result towards returning a Street View panorama that is nearest to the request location, or a panorama that is considered most likely to be what the user wants to see.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view-service#StreetViewPreference}
 */
google.maps.StreetViewPreference = {
  /**
   * Return the Street View panorama that is considered most likely to be what the user wants to see. The best result is determined by algorithms based on user research and parameters such as recognised points of interest, image quality, and distance from the given location.
   */
  BEST: 'best',
  /**
   * Return the Street View panorama that is the shortest distance from the provided location. This works well only within a limited radius. The recommended radius is 1km or less.
   */
  NEAREST: 'nearest',
}

/**
 * A StreetViewService object performs searches for Street View data.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view-service#StreetViewService}
 */
google.maps.StreetViewService = class {
  /**
   * Creates a StreetViewService, which provides an interface to the data stored in the Street View service.
   */
  constructor() {}

  /**
   * Retrieves the StreetViewPanoramaData for a panorama that matches the supplied Street View query request. The StreetViewPanoramaData is passed to the provided callback.
   * @param {google.maps.StreetViewLocationRequest} request
   * @param {function(google.maps.StreetViewPanoramaData, google.maps.StreetViewStatus)} callback
   */
  getPanorama(request, callback) {}
}

/**
 * Options that bias a search result towards returning a Street View panorama that is nearest to the request location, or a panorama that is considered most likely to be what the user wants to see. Specify these by value, or by using the constant's name.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view-service#StreetViewSource}
 */
google.maps.StreetViewSource = {
  /**
   * Uses the default sources of Street View, searches will not be limited to specific sources.
   */
  DEFAULT: 'default',
  /**
   * Limits Street View searches to outdoor collections. Indoor collections are not included in search results. Note also that the search only returns panoramas where it's possible to determine whether they're indoors or outdoors.
   */
  OUTDOOR: 'outdoor',
}

/**
 * The status returned by the StreetViewService on completion of a Street View request. These can be specified by value, or by using the constant's name.
 * {@link https://developers.google.com/maps/documentation/javascript/reference/street-view-service#StreetViewStatus}
 */
google.maps.StreetViewStatus = {
  /**
   * The request was successful.
   */
  OK: 'ok',
  /**
   * The request could not be successfully processed, yet the exact reason for failure is unknown.
   */
  UNKNOWN_ERROR: 'unknown error',
  /**
   * There are no panoramas found that match the search criteria.
   */
  ZERO_RESULTS: 'zero results',
}
