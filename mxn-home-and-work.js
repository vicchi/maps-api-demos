var	mapstraction;

function initialize() {
	var	home = new mxn.LatLonPoint(51.4323, -0.3478);
	var	work = new mxn.LatLonPoint(52.5307, 13.4110);
	var	somewhere = new mxn.LatLonPoint(51.516, 7.46);
	var	connector = new mxn.Polyline([home, work]);
	var	homeMarker = new mxn.Marker(home);
	var	workMarker = new mxn.Marker(work);

	connector.setWidth(3);
	mapstraction = new mxn.Mapstraction('map', 'ovi');

	mapstraction.addControls ({
		pan: true,
		zoom: 'large',
		map_type: true
	});
	
	mapstraction.addMarkerWithData (homeMarker, {
		infoBubble : "Where I Live",
		draggable : false,
		hover : true
	});
	
	var	bubbleText = "Where I Work (" +
		(work.distance(home).toFixed(1) * 0.6) +
		" miles away)";
	mapstraction.addMarkerWithData (workMarker, {
		infoBubble : bubbleText,
		draggable : false,
		hover : true
	});
	
	homeMarker.openBubble();
	workMarker.openBubble();
	mapstraction.addPolyline(connector);
	mapstraction.setCenterAndZoom(somewhere, 5);
}
