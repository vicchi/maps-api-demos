var	mapstraction;

function initialize() {
	var	counter = 0;
	
	mapstraction = new mxn.Mapstraction('map', 'ovi');
	mapstraction.addControls({
    	pan: true, 
		zoom: 'small',
		map_type: true 
	});
	mapstraction.setCenterAndZoom(new mxn.LatLonPoint(37.75, -122.44), 7);

	mapstraction.click.addHandler(function(event_name, event_source, event_args){
    	var coords = event_args.location;
		var	disp = document.getElementById('events');
		var marker;
		var text;

		disp.innerHTML += "\n" + ++counter + ". Mouse Click at: " +
			coords.lat.toFixed(4) + ' / ' + 
			coords.lon.toFixed(4);
		disp.scrollTop = disp.scrollHeight - disp.clientHeight;

        marker = new mxn.Marker(coords);
        text = "<p>Lat: " + coords.lat.toFixed(4) +
		" Lon: " + coords.lon.toFixed(4) + "</p>";
        marker.setInfoBubble(text);
        mapstraction.addMarker(marker);
        marker.openBubble();
	});
	mapstraction.changeZoom.addHandler(function(event_name, event_source, event_args){
		var	disp = document.getElementById('events');

		disp.innerHTML += "\n" + ++counter + ". Zoom level changed";
		disp.scrollTop = disp.scrollHeight - disp.clientHeight;
	});

	mapstraction.endPan.addHandler(function(event_name, event_source, event_args){
		var	disp = document.getElementById('events');

		disp.innerHTML += "\n" + ++counter + ". Map panned";
		disp.scrollTop = disp.scrollHeight - disp.clientHeight;
	});
	
	mapstraction.mousePosition('position');
};
