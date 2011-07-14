var	map;

function initialize() {
	var bubbleContainer = new ovi.mapsapi.map.component.InfoBubbles();
	var	coords = new ovi.mapsapi.geo.Coordinate(52.530390, 13.385190);
	var	marker = new ovi.mapsapi.map.StandardMarker(coords);
	var infoBubble;
	var	restore_bubble = false;
	var	bubbleText = "Ovi Maps; Made Here"

	map = new ovi.mapsapi.map.Display(
		document.getElementById("map"),
		{
	    	'zoomLevel': 12,
	    	'center': [52.530390, 13.385190],
			components: [ 
				new ovi.mapsapi.map.component.Behavior(),
				bubbleContainer
			]
		});

	marker.addListener("click", function() {
		infoBubble = bubbleContainer.addBubble(bubbleText, coords);
		restore_bubble = true;
	});

	marker.enableDrag();
	map.objects.add(marker);
	
	marker.addListener("dragstart", function() {
		if (bubbleContainer.bubbleExists(infoBubble)) {
			bubbleContainer.removeBubble(infoBubble);
			restore_bubble = true;
		}
	});

	marker.addListener("dragend", function(event) {
		var xy = event.dataTransfer.getData("application/map-drag-object-offset");
		var new_coords = map.pixelToGeo(
			event.displayX - xy.x + marker.anchor.x,
			event.displayY - xy.y + marker.anchor.y
			);
		var bb = map.getBoundingBox();
		
		if (bb.contains(new_coords)) {
			coords = new_coords;
		}

		if (restore_bubble) {
			infoBubble = bubbleContainer.addBubble(bubbleText, coords);
			restore_bubble = false;
		}
	});
}
