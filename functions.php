<?php
/*
Copyright (c) 2011, Gary Gale
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

function doHeader($demo_prefix, $use_mxn=FALSE) {
	print "<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\" />\n";
	print "<link rel=\"stylesheet\" href=\"/yui/2.9.0/build/reset-fonts-grids/reset-fonts-grids.css\" type=\"text/css\" />\n";
	print "<link rel=\"stylesheet\" href=\"/yui/2.9.0/build/base/base.css\" type=\"text/css\" />\n";
	print "<link rel=\"stylesheet\" href=\"/css/maps-api-demos.css\" type=\"text/css\" />\n";
	print "<link rel=\"stylesheet\" href=\"/prettify/src/prettify.css\" type=\"text/css\" />\n";
	print "<script type=\"text/javascript\" src=\"http://api.maps.ovi.com/jsl.js\" charset=\"utf-8\"></script>\n";
	if ($use_mxn) {
		print "<script type=\"text/javascript\" src=\"/mxn/build/mxn.js?(ovi)\"></script>\n";
	}
	print "<script type=\"text/javascript\" src=\"/prettify/src/prettify.js\"></script>\n";
	print "<script type=\"text/javascript\" src=\"/" . $demo_prefix . ".js\"></script>\n";
	print "<script type=\"text/javascript\" src=\"/functions.js\"></script>\n";
}

function doFooter($use_mxn=FALSE) {
	print "<div id=\"ft\" role=\"contentinfo\">\n";
	if ($use_mxn) {
		print "<p>Built with the <a href=\"http://mapstraction.com/\">Mapstraction</a> and <a href=\"http://api.maps.ovi.com/\">Ovi Maps</a> (<span id=\"build\"></span>) APIs and the <a href=\"http://developer.yahoo.com/yui/\">YUI<a> and <a href=\"http://code.google.com/p/google-code-prettify/\">Prettify</a> JavaScript libraries.</p>\n";
	}
	
	else {
		print "<p>Built with the <a href=\"http://api.maps.ovi.com/\">Ovi Maps API</a> (<span id=\"build\"></span>) and the <a href=\"http://developer.yahoo.com/yui/\">YUI<a> and <a href=\"http://code.google.com/p/google-code-prettify/\">Prettify</a> JavaScript libraries.</p>\n";
	}
	print "<p><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/2.0/uk/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/2.0/uk/80x15.png\" /></a>&nbsp;<span xmlns:dc=\"http://purl.org/dc/elements/1.1/\" href=\"http://purl.org/dc/dcmitype/Text\" property=\"dc:title\" rel=\"dc:type\">maps.vicchi.org</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://www.garygale.com/\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">Gary Gale</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/2.0/uk/\">Creative Commons Attribution-Share Alike 2.0 UK: England &amp; Wales License</a>.</p>\n";
	print "</div>\n";
	
}
function formatDemoSource($prefix) {
	echo '<pre class="prettyPrint">';
	echo file_get_contents($prefix . '.js');
	echo '</pre>';
}

?>
