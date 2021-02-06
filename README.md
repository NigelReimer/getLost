# getLost

getLost is a web-based game inspired by [GeoGuessr](https://www.geoguessr.com/). Making use of the Google Maps JavaScript API, it puts the player in a random position on Earth and challenges them to deduce their location using the Street View service to explore and gather clues.

In 2018, Google significantly increased prices for usage of their Maps API, forcing GeoGuessr and other similar services to pursue more aggressive monetization schemes. For this reason, in order to use this application, you must first provide your own Google Maps JavaScipt API key by replacing YOUR_API_KEY_HERE in the index.html file.

Due to the aforementioned API fees, there are no plans for deployment and this repository merely contains the required source files without any instructions for installation or usage beyond simply playing the game. Feel free to use and expand upon the source in any way you'd like!

## How to Play

Upon loading, the player will automatically be sent to a random place where they must then search for clues and ultimately guess their position. In order to achieve this, there are two views available: The panorama view and the map view.

On the panorama view, players explore their surroundings and gather clues about their location.

![Panorama View](https://raw.githubusercontent.com/NigelReimer/images/main/getLost/Picture1.png)

On the map view, players select their guess by clicking a location on the map, then submit their guess for scoring.

![Map View](https://raw.githubusercontent.com/NigelReimer/images/main/getLost/Picture1.png)

Players can switch between these views by clicking the leftmost toggle button or by pressing the spacebar. The rightmost button performs different actions depending on the current view and game state. On the map view, it displays as a compass showing the current direction faced, and will return players to their start location when pressed. On the map view it will submit a guess for scoring once a guess marker has been placed, and it will attempt a new round once the current one is complete.

In addition to the buttons, there is also a text box for keeping some brief notes such as street names or other clues. This text box is also used to display the end-of-round information including the coordinates of a player's position, the distance that their guess was from the true position, the time it took to guess, and a score derived from these values.

## Options

Games of getLost are customised by changing the options passed when creating an instance of the GetLostGame class. Check out the GetLostOptions type definition in the typedefs.js file for more information.
