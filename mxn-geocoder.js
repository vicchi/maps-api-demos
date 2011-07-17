var mapstraction;
var geocoder;
var address;

function initialize() {
    mapstraction = new mxn.Mapstraction('map','ovi');
    mapstraction.setCenterAndZoom(new mxn.LatLonPoint(0,0), 1);

    geocoder = new mxn.Geocoder('ovi', geocode_return, error_callback);

	address = "Schönhauser Allee 180, Berlin, Germany";
    
    geocoder.geocode(address);    
}

function error_callback(status) {
	geocode_status = document.getElementById("geocode_status");
	geocode_status.innerHTML = status;
}

function geocode_return(location) {
	var	infoBubble;
	var	components = [];
	
	geocode_status = document.getElementById("geocode_status");
	geocode_status.innerHTML = "geocoding succeeded";

    // display the map centered on a latitude and longitude (Google zoom levels)
    mapstraction.setCenterAndZoom(location.point, 15);

    mapstraction.addControls({
        pan: true, 
        zoom: 'small',
        map_type: true
    });
    // create a marker positioned at a lat/lon 
    geocode_marker = new mxn.Marker(location.point);

	if (location.street) {
		components.push(location.street);
	}
	if (location.locality) {
		components.push(location.locality);
	}
	if (location.postcode) {
		components.push(location.postcode);
		}
	if (location.region) {
		components.push(location.region);
	}
	if (location.country) {
		components.push(location.country);
	}
	
	var bubble = components.join(', ');

    geocode_marker.setInfoBubble(bubble);

    // display marker 
    mapstraction.addMarker(geocode_marker);

    // open the marker
    geocode_marker.openBubble();
}

function do_geocode() {
	address = document.getElementById("address").value;
	geocoder.geocode(address);
}
