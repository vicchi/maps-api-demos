var	map;

function initialize() {
	map = new ovi.mapsapi.map.Display(
		document.getElementById("map"),
		{
	    	'zoomLevel': 8,
	    	'center': [52.530390, 13.385190],
			components: [ 
				new ovi.mapsapi.map.component.Behavior()
			]
		});
}
