$(document).ready(function () {
  
  $(window).scroll(function () {
    var h = $(window).scrollTop();
    if (h > 50) {
      $(".buttom_header").addClass("fixed");
    } else {
      $(".buttom_header").removeClass("fixed");
    }
  });
  
  $("#slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000
  }); 

  $("#logo_slider").owlCarousel({
    items: 3,         
    loop: true,
    margin: 30,
    // center: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
      1440:{items:3},
    }
  });

  $("#PROJECTS").owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    nav: false,
    dots: false,
    items: 4,
    autoplay: true,
  });

  $("#text_slider").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    autoplay: true,
  });

  $("#logos").owlCarousel({
    loop: true,
    nav: false,
    items: 5,
    autoplay: true,
    margin:30,
    responsive: {
      0: { items: 2 },
      768: { items: 4 },
      1440:{items:5},
    }
  });

  
  new WOW().init(); 

  
});

$(document).ready(function(){
  $("#Modern").owlCarousel({
    // loop: true,
    // margin: 30,
    // center: true,
    // nav: false,
    // dots: false,
    items: 1,
    // autoplay: true,
  });    
  
  var owl = $('#Modern');
  owl.owlCarousel();
  owl.on('changed.owl.carousel',function(event){
    new WOW().init();
  })
  new WOW().init();

})

$(document).ready(function(){
  $("#History").owlCarousel({
    // loop: true,
    // margin: 30,
    // center: true,
    // nav: false,
    // dots: false,
    items: 1,
    // autoplay: true,
  });    
  
  var owl = $('#History');
  owl.owlCarousel();
  owl.on('changed.owl.carousel',function(event){
    new WOW().init();
  })
  new WOW().init();

})
$(document).ready(function(){
  $("#Moving ").owlCarousel({
    // loop: true,
    // margin: 30,
    // center: true,
    // nav: false,
    // dots: false,
    items: 1,
    // autoplay: true,
  });    
  
  var owl = $('#Moving ');
  owl.owlCarousel();
  owl.on('changed.owl.carousel',function(event){
    new WOW().init();
  })
  new WOW().init();

})

$(document).ready(function(){
  $("#Art").owlCarousel({
   
    items: 1,
   
  });    
  
  var owl = $('#Art');
  owl.owlCarousel();
  owl.on('changed.owl.carousel',function(event){
    new WOW().init();
  })
  new WOW().init();

})
$(document).ready(function(){
  $("#Gallery").owlCarousel({
    // loop: true,
    // margin: 30,
    // center: true,
    // nav: false,
    // dots: false,
    items: 1,
    // autoplay: true,
  });    

  var owl = $('#Gallery');
  owl.owlCarousel();
  owl.on('changed.owl.carousel',function(event){
    new WOW().init();
  })
  new WOW().init();




  var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  
 

})
