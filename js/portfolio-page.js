//scroll触发BSX设备出现
$(function(){
            function onScrollInit( items, trigger ) {
                items.each( function() {
                var osElement = $(this),
                    osAnimationClass = osElement.attr('data-os-animation'),
                    osAnimationDelay = osElement.attr('data-os-animation-delay');

                    osElement.css({
                        '-webkit-animation-delay':  osAnimationDelay,
                        '-moz-animation-delay':     osAnimationDelay,
                        'animation-delay':          osAnimationDelay
                    });
                    var osTrigger = ( trigger ) ? trigger : osElement;

                    osTrigger.waypoint(function() {
                        osElement.addClass('animated').addClass(osAnimationClass);
                        },{
                            triggerOnce: true,
                            offset: '60%'
                    });
                });
            }
            onScrollInit( $('.os-animation') );
            onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});

//process collapes
$(function() {
  var b = $("#button");
  var w = $("#wrapper");
  var l = $("#list");

  w.height(l.outerHeight(true));

  b.click(function() {

    if(w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      w.addClass('open');
      w.height(l.outerHeight(true));
    }

  });
});

//portfolio-header fadeOutDown
$(function() {
  $('div.close-left').on('click',function() {
    $('section.portfolio-header').addClass('animated fadeOutDown');
  });
});

function delayURL(url,time){
  setTimeout("top.location.href = '" + url +"'",time);
}

//carousel
$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});

//jquery.viewport.js
$('video:in-viewport')[0].play();

$(window).scroll(function(){
    $('video:in-viewport')[0].play();
    $('video').not('video:in-viewport')[0].pause()
});


function appear(x) {
  var thisID = x.getAttribute('id');
  var thatID = "homehover" + thisID.charAt(5);
  document.getElementById(thatID).style.opacity = "1.0";
}

function disappear(x) {
  var thisID = x.getAttribute('id');
  var thatID = "homehover" + thisID.charAt(5);
  document.getElementById(thatID).style.opacity = "0.0";
}
