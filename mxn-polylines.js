var	mapstraction;

function initialize() {
	mapstraction = new mxn.Mapstraction('map', 'ovi');
	poly(mapstraction);
}

function poly(map) {
	map.setCenterAndZoom(new mxn.LatLonPoint(37.78,-122.395033836365), 12);

    // create a polygon object
	var myPoly = new mxn.Polyline([
		new mxn.LatLonPoint(37.7945928242851,-122.395033836365),
		new mxn.LatLonPoint(37.7938467508748,-122.393960952759),
		new mxn.LatLonPoint(37.7945928242851,-122.39275932312),
		new mxn.LatLonPoint(37.789505810689,-122.387609481812),
		new mxn.LatLonPoint(37.7782792282611,-122.387351989746),
		new mxn.LatLonPoint(37.7768545853105,-122.390570640564),
		new mxn.LatLonPoint(37.7690524823224,-122.397179603577),
		new mxn.LatLonPoint(37.7668813159428,-122.394347190857),
		new mxn.LatLonPoint(37.7658635597592,-122.407650947571),
		new mxn.LatLonPoint(37.7689167862912,-122.408037185669),
		new mxn.LatLonPoint(37.7765493011063,-122.417650222778),
		new mxn.LatLonPoint(37.7945928242851,-122.395033836365)
		]);
	myPoly.setFillColor('#2C2A');
	myPoly.setOpacity(0.5);
    map.addPolyline(myPoly);
}
