var	mapstraction;

function initialize() {
	var	llp = new mxn.LatLonPoint(37.404196,-122.008194);
	mapstraction = new mxn.Mapstraction('map', 'ovi');
	mapstraction.setCenterAndZoom(llp, 9);
	
	/* args = {
	 *     pan:      true,
	 *     zoom:     'large' || 'small',
	 *     overview: true,
	 *     scale:    true,
	 *     map_type: true,
	 * }
	 */
    mapstraction.addControls({
    	pan: true, 
		zoom: 'small',
		map_type: true 
	});
}
