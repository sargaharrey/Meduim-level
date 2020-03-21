

$(function() {

//   var logo = $('nav .logo');
//   var active = $('.nav-item .Active')
//   var header = $('header  span');
//   var headerBtn = $('.btno')
//   var btn = $('a , button');
//   var icon = $('span i');
//   var h3 = $('h3');
//   var box = $('.box');

// $('.color1').click(function(){
//   logo.css('color', 'green');
//    active.css('color', 'green');
//     header.css('color', 'green')
//     headerBtn.css('background-color','green')

// })

 // scroll-plugin
  $('body').niceScroll({
    cursorwidth: "14px",
    cursorcolor: "#00ADB5",
     zindex:'10000000000000000000000',
  });

  // background-image

var pageSection = $(".bg-img, section");
pageSection.each(function(indx){

    if ($(this).attr("data-background")){
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
});


  

// smooth-scroll
$.scrollIt({
  upKey: 38,                // key code to navigate to the next section
  downKey: 40,              // key code to navigate to the previous section
  easing: 'swing',          // the easing function for animation
  scrollTime: 600,          // how long (in ms) the animation takes
  activeClass: 'active',    // class given to the active nav element
  onPageChange: null,       // function(pageIndex) that is called when page is changed
  topOffset: 0            // offste (in px) for fixed top navigation
});

})




$(document).scroll(function(){




  // var item = $('.navbar-nav .nav-link');
  // var section = $('section');
  // if(item.hasClass('section.className')){
  //   console.log('true')
  // }
  // else{
  //   console.log('false')
  // }


   if($(window).scrollTop() > 80) {
     $('.navbar-custom').addClass('nav-scroll');
      $('.navbar-nav .nav-link').not('.Active').css({'color': '#FFF'})
      $('.navbar-custom .logo span').css({'color':'#FFF'})
   }
   else{
     $('.navbar-custom').removeClass('nav-scroll');
      $('.navbar-nav .nav-link').not('.Active').css({'color': 'black'})
     $('.navbar-custom .logo span').css({ 'color': 'black' })
   }
})


$(document).ready(function () {
  


  // carousel-slider
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    autoplayHoverPause: true,


  });
  


  // owl carousel
  $('.Testimonials .owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 1,
    
  })

  // Aos effect
  AOS.init();

 
  $(".vid").magnificPopup({
    items: {
      src: '../video.mp4'
    },
    type: 'iframe'
  })

 $('.facts .body .box span').counterUp({
   
   time:2000,
 })


  $('.bar').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%' });
})




