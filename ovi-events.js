var	map;

function initialize() {
	var map_loaded = false;
	var eventStates = {
		"center": false,
		"zoom": false,
		"mapsize": false
	};
	var bubbleContainer = new ovi.mapsapi.map.component.InfoBubbles();
	var	coords = new ovi.mapsapi.geo.Coordinate(52.530390, 13.385190);
	var	position_disp = document.getElementById('position');
	var	event_disp = document.getElementById('events');
	var	counter = 0;
	
	position_disp.innerHTML = '0.0000 / 0.0000';

	map = new ovi.mapsapi.map.Display(
		document.getElementById("map"),
		{
	    	'zoomLevel': 12,
	    	'center': [52.530390, 13.385190],
			components: [ 
				new ovi.mapsapi.map.component.Behavior(),
				new ovi.mapsapi.map.component.ZoomBar(),
				bubbleContainer
			]
		});

	map.addListener('mousemove', function(event){
		var move_coords = map.pixelToGeo(event.targetX, event.targetY);

		position_disp.innerHTML = move_coords.latitude.toFixed(4)
			+ ' / '
			+ move_coords.longitude.toFixed(4);
		position_disp.scrollTop = position_disp.scrollHeight - position_disp.clientHeight;
	});

	map.addListener("click", function(event) {
		var click_coords = map.pixelToGeo(event.displayX, event.displayY);
		var marker;
		var text;
		var	bubble;
		
		event_disp.innerHTML += "\n" + ++counter + ". Mouse Click at: " +
			click_coords.latitude.toFixed(4) + ' / ' + 
			click_coords.longitude.toFixed(4);
		event_disp.scrollTop = event_disp.scrollHeight - event_disp.clientHeight;

        marker = new ovi.mapsapi.map.StandardMarker(click_coords);
		map.objects.add(marker);

        text = "<p>Lat: " + click_coords.latitude.toFixed(4) +
		" Lon: " + click_coords.longitude.toFixed(4) + "</p>";
		bubble = bubbleContainer.addBubble(text, click_coords);
	});
	

	map.addListener('mapviewchangestart', function(event){
		if (event.data & event.MAPVIEWCHANGE_CENTER) {
			eventStates.center = true;
		}
		if (event.data & event.MAPVIEWCHANGE_ZOOM) {
			eventStates.zoom = true;
		}
		if (event.data & event.MAPVIEWCHANGE_SIZE) {
			eventStates.mapsize = true;
		}
	});

	map.addListener('mapviewchangeupdate', function(event){
		if (event.data & event.MAPVIEWCHANGE_CENTER) {
			eventStates.center = true;
		}
		if (event.data & event.MAPVIEWCHANGE_ZOOM) {
			eventStates.zoom = true;
		}
		if (event.data & event.MAPVIEWCHANGE_SIZE) {
			eventStates.mapsize = true;
		}
	});

	map.addListener('mapviewchangeend', function(event){
		// The Ovi Maps API doesn't (currently) support a "map loaded" event, but both a
		// "centre" and "size" mapviewchangestart/mapviewchangeupdate/mapviewchangeend
		// event sequence will be fired as part of the initial loading so we can trap
		// this ...
		
		if (!map_loaded) {
			if (eventStates.center && eventStates.mapsize) {
				map_loaded = true;
				eventStates.mapsize = false;

				event_disp.innerHTML += "\n" + ++counter + ". Map loaded";
				event_disp.scrollTop = event_disp.scrollHeight - event_disp.clientHeight;
			}
		}

		if (eventStates.center) {
			eventStates.center = false;

			event_disp.innerHTML += "\n" + ++counter + ". Map panned";
			event_disp.scrollTop = event_disp.scrollHeight - event_disp.clientHeight;
		}
		
		if (eventStates.zoom) {
			eventStates.zoom = false;

			event_disp.innerHTML += "\n" + ++counter + ". Zoom level changed";
			event_disp.scrollTop = event_disp.scrollHeight - event_disp.clientHeight;
		}
	});
}
