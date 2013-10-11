/**
 * 
 * OSLIDER v1.0
 *
 * COPYRIGHT: GNU GPL 3
 * 
 * @author Patrick Gruber
 * @extends jquery
 *
 */

// standard attributes (caution: modification may break slider)
var sliderList = null;
var objectCount = null;
var objectWidth = null;
var sliderContent = new Array();
var activeObj = 0;
var automateTimeout = null;

var animationTime = 500;
var automaticSlide = false;
var automaticTime  = 500;
var stopTimeout = false;

// handle slider
jQuery.fn.oslider = function(prev, next, options){
  sliderList = $(this).children()[0];
  objectWidth = $("li", sliderList).width() + (parseInt($("li", sliderList).css("margin-left")) * 2);
  objectCount = $("li", sliderList).length;
  
  $(sliderList).width((objectCount + 4) * objectWidth);
  
  $("li", sliderList).each(function(i){
    $(this).css("float", "left");
    sliderContent[i] = $(this);
  });
  
  overwriteDefaults(options);
  
  if(objectCount > 1)
    initializeSlider(prev, next);
  else
    denySlider(prev, next);
};

// overwrite default options
function overwriteDefaults(options){
  if(options.animtime != undefined)
    animationTime = options.animtime;
  if(options.autoslide != undefined)
    automaticSlide = options.autoslide;
  if(options.autotime != undefined)
    automaticTime = options.autotime;
  if(options.stopauto != undefined)
    stopTimeout = options.stopauto;
}

// start oslider
function initializeSlider(prev, next){
  $(sliderList).append(sliderContent[0].clone());
  $(sliderList).append(sliderContent[1].clone());
  $(sliderList).html("<li style=\"float: left;\">" + sliderContent[objectCount - 1].html() + "</li>" + $(sliderList).html());
  $(sliderList).html("<li style=\"float: left;\">" + sliderContent[objectCount - 2].html() + "</li>" + $(sliderList).html());
  $(sliderList).css("left", "-" + (objectWidth * 2) + "px");
  $(prev).click(function(){
    slidePrev();
    if(stopTimeout)
      clearInterval(automateTimeout);
  });
  $(next).click(function(){
    slideNext();
    if(stopTimeout)
      clearInterval(automateTimeout);
  });
  
  if(automaticSlide){
    automateTimeout = setInterval("slideNext()", automaticTime);
  }
}

// slide to last element
function slidePrev(){
  $(sliderList).animate({ left: "+=" + objectWidth }, animationTime, function(){
    if(activeObj == 0){
      activeObj = objectCount - 1;
      $(sliderList).css("left", "-" + ((objectWidth * 2) + (objectWidth * activeObj)) + "px");
    }else{
      activeObj--;
    }
  });
}

// slide to next element
function slideNext(){
  $(sliderList).animate({ left: "-=" + objectWidth }, animationTime, function(){
    if(activeObj == objectCount - 1){
      activeObj = 0;
      $(sliderList).css("left", "-" + (objectWidth * 2) + "px");
    }else{
      activeObj++;
    }
  });  
}

// unbind event handler
function denySlider(prev, next){
  $(prev).attr("id", "slider-no-prev");
  $(next).attr("id", "slider-no-next");
}
