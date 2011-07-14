var	mapstraction;

function initialize() {
	mapstraction = new mxn.Mapstraction('map', 'ovi');
	mapstraction.setCenterAndZoom(new mxn.LatLonPoint(37.75,-122.44), 8);
}
