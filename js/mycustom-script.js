$(document).ready(function(){
// jQuery methods go here..
    "use strict";
    //-------------ON SCROLL NAVAR STICKY ---------------
    /* Loader Code Start */
    $(window).on("load", function() { 
        $(".section-loader").fadeOut("slow", function () { 
            //Animation complete
        });
        
      });
/* Loader Code End */

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });
  

      /*
    |=================
    | Onepage Nav
    |================
    */
// outline navar element accordingto current section, applies to class navbar
  $("#main-navbar").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5
  });
    
    /*
    |===============
    | WOW ANIMATION
    |==================
    */
   var wow = new WOW({
    mobile: false  // trigger animations on mobile devices (default is true)
});
wow.init();
    
    
  }(jQuery));