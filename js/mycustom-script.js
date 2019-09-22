$(document).ready(
  (function() {
    // jQuery methods go here..
    "use strict";
    //-------------ON SCROLL NAVAR STICKY ---------------
    /* Loader Code Start */
    $(window).on("load", function() {
      $(".section-loader").fadeOut("slow", function() {
        //Animation complete
      });
    });
    /* Loader Code End */

    $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $(".nav-scroll").addClass("nav-strict");
      } else {
        $(".nav-scroll").removeClass("nav-strict");
      }
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            "easeInOutExpo"
          );
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
      $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
      target: "#topNav"
    });

    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      mobile: true // trigger animations on mobile devices (default is true)
    });
    wow.init();

    //initialise tooltips....
    $('[data-toggle="tooltip"]').tooltip();

    //set animation on dev icons
    var devicons = $(".dev-icons li.list-inline-item");
    devicons.addClass("wow bounceInRight");
    for (let icons of devicons) {
    }
  })(jQuery)
);
