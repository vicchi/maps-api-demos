<!--
Copyright (c) 2011, Gary Gale
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
<?php
require_once('functions.php');
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
 "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<title>Maps API Demos &raquo; Ovi Maps API &raquo; Geocoding</title>
	<?php
	$demo_prefix = basename(__FILE__, ".php");
	doHeader($demo_prefix);
	?>
</head>
<body onload="map_initialize();">
<div id="doc4" class="yui-t7">
	<div id="hd" role="banner">
		<h1><a href="/">Maps API Demos</a> &raquo; Ovi Maps API &raquo; Geocoding</h1>
	</div>
	<div id="bd" role="main">
		<div class="yui-g">
			<p>According to Wikipedia, <a href="http://en.wikipedia.org/wiki/Geocoding">geocoding</a> is the process of finding associated geographic coordinates (often expressed as latitude and longitude) from other geographic data, such as street addresses, or zip codes (postal codes).</p>
			<p>This demo takes an address, geocodes it and uses the returned coordinates and address information to put a marker on the map with an InfoBubble containing the address information.</p>
		</div>
		<div class="yui-g">
			<div id="map" role="main" class="yui-g"></div>
			<h2>Geocode another address</h2>
			<input type="text" id="address" name="address" value="Berlin, Germany" size="35" />&nbsp;<a href="#" onclick="do_geocode(); return false;">Geocode this</a>
			&nbsp;<strong>Geocoding status:</strong> <span id="geocode_status"></span>
		</div>
		<div class="yui-g">
			<br/>
			<?php
			echo '<h1>JavaScript Demo Source: ' . $demo_prefix . '.js</h1>';
			?>
			<?php
			formatDemoSource($demo_prefix);
			?>
		</div>
	</div>
	<?php doFooter() ?>
</div>
</body>
</html>