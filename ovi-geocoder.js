var	map;
var	geocoder;
var	bubbleContainer;

function initialize() {
	var	initial_address = "Schönhauser Allee 180, Berlin, Germany";
	
	geocoder = new ovi.mapsapi.search.Manager();
	
	geocoder.addObserver("state", function(manager, key, value) {
		if (value == "finished" || value == "failed") {
			geocode_callback (manager.locations, value);
		}
	});

	bubbleContainer = new ovi.mapsapi.map.component.InfoBubbles();
	map = new ovi.mapsapi.map.Display(
		document.getElementById("map"),
		{
	    	'zoomLevel': 8,
	    	'center': [52.530390, 13.385190],
			components: [ 
				new ovi.mapsapi.map.component.Behavior(),
				new ovi.mapsapi.map.component.ZoomBar(),
				bubbleContainer
			]
		});
		
	geocode(initial_address);
}

function geocode(address) {
	geocoder.geocode(address);
}

function geocode_callback(response, status) {
	if (status == "failed") {
		var	error_cause = ovi_geocoder.getErrorCause();
		var	error_status = "";
		
		if (error_cause.type) {
			error_status = error_cause.type;
			if (error_cause.subtype) {
				error_status += ", " + error_cause.subtype;
			}
			if (error_cause.message) {
				error_status += ", " + error_cause.message;
			}
		}
		
		else {
			error_status = "Geocoding failure";
		}
		
		error_callback(error_status);
	}
	
	else if (status == "finished") {
		var	return_location = {};
		var	street_components = [];
		var locality_components = [];
		var	region_components = [];
		
		// Mapping ovi.mapsapi.search.Address to return_location ...
		//
		// return_location.street = Address.houseNumber + Address.street
		// return_location.locality = Address.district + Address.city
		// return_location.postcode = Address.postalCode
		// return_location.region = Address.county + Address.state
		// return_location.country = Address.country
		
		return_location.street = '';
		return_location.locality = '';
		return_location.postcode = '';
		return_location.region = '';
		return_location.country = '';

		if (response.length > 0) {
			var	address = response[0].address;
			var	coords = response[0].displayPosition;
			
			if (address.street) {
				street_components.push(address.street);
			}
			if (address.houseNumber) {
				street_components.unshift(address.houseNumber);
			}
			
			if (address.city) {
				locality_components.push(address.city);
			}
			if (address.district) {
				locality_components.unshift(address.district);
			}
			
			if (address.postalCode) {
				return_location.postcode = address.postalCode;
			}

			if (address.state) {
				region_components.unshift(address.state);
			}
			if (address.county) {
				region_components.push(address.county);
			}
			
			if (address.country) {
				return_location.country = address.country;
			}

			if (return_location.street === '' && street_components.length > 0) {
				return_location.street = street_components.join(' ');
			}
			if (return_location.locality === '' && locality_components.length > 0) {
				return_location.locality = locality_components.join(', ');
			}
			if (return_location.region === '' && region_components.length > 0) {
				return_location.region = region_components.join(', ');
			}
			
			return_location.point = coords;
			success_callback(return_location);
		}
	}
}

function error_callback(status) {
	geocode_status = document.getElementById("geocode_status");
	geocode_status.innerHTML = status;
}

function success_callback (location) {
	var	infoBubble;
	var	components = [];
	
	geocode_status = document.getElementById("geocode_status");
	geocode_status.innerHTML = "geocoding succeeded";
	
	map.setCenter(location.point);
	
	var marker = new ovi.mapsapi.map.StandardMarker(location.point);
	
	map.objects.add(marker);

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
	infoBubble = bubbleContainer.addBubble(bubble, location.point);
}

function do_geocode() {
	var	address = document.getElementById("address").value;
	
	geocode(address);
}