oslider 1.0
=======

<p>
<strong>Description:</strong><br />
Simple to customize Javascript Slider, based on jQuery.
</p>
<p>
<strong>Usage:</strong><br />
Sample code of the Plugin Usage:
<pre>
$(document).ready(function(){
  var prev = "#simplePrevious";
  var next = "#simpleNext";
  $('#o_imageflow_inner').oslider(prev, next, {
    animtime: 1000,
    autoslide: true,
    autotime: 10000,
    stopauto: true
  });
});
</pre>
</p>
<p>
The function "oslider" can be called with three parameters. The first, would be the the ID of the previous button, the second the ID of the next button and the third is an object overwriting the behaviour of the slider.<br />
For now, there are 4 basic Parameters, that can be changed:
<ol>
<li><strong>"animtime" (int)</strong>, changes the animation speed</li>
<li><strong>"autoslide" (boolean)</strong>, if set to true, the slider changes slides automatically</li>
<li><strong>"autotime" (int)</strong>, the timeout until the next slide will be shown (only used if autoslide is turned on)</li>
<li><strong>"stopauto" (boolean)</strong>, if set to true, the slider stops when the NEXT or PREVIOUS button is clicked</li>
</ol>
</p>
