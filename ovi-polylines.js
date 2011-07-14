var	map;

function initialize() {
	map = new ovi.mapsapi.map.Display(
		document.getElementById("map"),
		{
	    	'zoomLevel': 12,
	    	'center': [37.78,-122.395033836365],
			components: [ 
				new ovi.mapsapi.map.component.Behavior(),
				new ovi.mapsapi.map.component.ZoomBar()
			]
		});
	poly(map);
}

function poly(mapobj) {
    // create a polygon object
	var myPoly = new ovi.mapsapi.map.Polygon([
		new ovi.mapsapi.geo.Coordinate(37.7945928242851,-122.395033836365),
		new ovi.mapsapi.geo.Coordinate(37.7938467508748,-122.393960952759),
		new ovi.mapsapi.geo.Coordinate(37.7945928242851,-122.39275932312),
		new ovi.mapsapi.geo.Coordinate(37.789505810689,-122.387609481812),
		new ovi.mapsapi.geo.Coordinate(37.7782792282611,-122.387351989746),
		new ovi.mapsapi.geo.Coordinate(37.7768545853105,-122.390570640564),
		new ovi.mapsapi.geo.Coordinate(37.7690524823224,-122.397179603577),
		new ovi.mapsapi.geo.Coordinate(37.7668813159428,-122.394347190857),
		new ovi.mapsapi.geo.Coordinate(37.7658635597592,-122.407650947571),
		new ovi.mapsapi.geo.Coordinate(37.7689167862912,-122.408037185669),
		new ovi.mapsapi.geo.Coordinate(37.7765493011063,-122.417650222778),
		new ovi.mapsapi.geo.Coordinate(37.7945928242851,-122.395033836365)
		],
		{
			pen:{strokeColor: "#000", lineWidth: 1},
			brush:{color: "#2C2A"}
		});
		mapobj.objects.add(myPoly);
}
