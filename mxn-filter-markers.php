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
	<title>Maps API Demos &raquo; Mapstraction &raquo; Ovi Maps API &raquo; Marker Filtering Demo</title>
	<?php
	$demo_prefix = basename(__FILE__, ".php");
	doHeader($demo_prefix, TRUE);
	?>
	<script src="http://mapstraction.appspot.com/lib/prototype.js" type="text/javascript"></script>
 	<script src="http://mapstraction.appspot.com/lib/scriptaculous.js?load=slider" type="text/javascript"></script>
  	<style type="text/css">
	/* put the left rounded edge on the track */
	#track-left {
		position: absolute;
		width: 5px;
		height: 9px;
		background: transparent url(http://mapstraction.appspot.com/images/slider-images-track-left.png) no-repeat top left;
	}
	/* put the track and the right rounded edge on the track */
	#track {
		background: transparent 		url(http://mapstraction.appspot.com/images/slider-images-track-right.png) no-repeat top right;
	}
	</style>

</head>
<body onload="map_initialize();">
<div id="doc4" class="yui-t7">
	<div id="hd" role="banner">
		<h1><a href="/">Maps API Demos</a> &raquo; Mapstraction &raquo; Ovi Maps API &raquo; Marker Filtering Demo</h1>
	</div>
	<div id="bd" role="main">
		<div class="yui-g">
			<p>This demo shows Mapstraction's filtering mechanism to show and hide map markers which have a date and time-stamp associated with them. Drag and slide the markers below to see the demo in action.</p>
		</div>
	  <div id="track" style="width:200px; height:9px; margin:20px;">
	    <div id="track-left"></div>
	    <div id="handle1" style="width:19px; height:20px;"><img src="http://mapstraction.appspot.com/images/slider-images-handle.png" alt="" style="float: left;" /></div><div id="handle2" style="width:19px; height:20px;top:-20px;"><img src="http://mapstraction.appspot.com/images/slider-images-handle.png" alt="" style="float:left" /></div>
	  </div>

	  <div id="timeWindow" style="padding:10px; font-size: small; width: 600px;"></div>
		
		<div id="map" role="main" class="yui-g"></div>
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
	<?php doFooter(TRUE); ?>
</div>
</body>
</html>