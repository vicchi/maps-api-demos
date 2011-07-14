var	mapstraction;

function initialize() {
	var	llp = new mxn.LatLonPoint(37.75, -122.44);
	mapstraction = new mxn.Mapstraction('map', 'ovi');
	marker = new mxn.Marker(llp);
	marker.setDraggable(true);
	marker.setInfoBubble("Test InfoBubble");
	mapstraction.addMarker(marker);
	mapstraction.setCenterAndZoom(llp, 12);
}
