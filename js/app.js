$(document).foundation();

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    // rewindNav: false,
    // singleItem: true,
    // autoHeight: true,
    // navigation: true,
    navText: [
      "<i class='fi-arrow-left'></i>",
      "<i class='fi-arrow-right'></i>"
      ],
    // pagination: false,
    navSpeed: 500,
    // // rewindSpeed: 0,
    lazyLoad: true,
    // lazyEffect: false,
    // stagePadding: 50,
    // autoWidth: true,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
    // stopOnHover: true,
    // infinite: true
  });



// $('.main-gallery').flickity({
//   imagesLoaded: true,
//   pageDots: true,
//   wrapAround: false,
//   freescroll: false,
//   contain: true
// });



  // $('.dropdown_button').click(function() {
  //   $('.dropdown_menu').slideToggle(300, function() {
  //   });
  //   return false;
  // });

  // $.stellar({
  //   horizontalScrolling: false,
  //   verticalOffset: 40
  // });






});


var price = {
  "0": "EGP 100",
  "1": "EGP 250",
  "2": "EGP 500",
  "3": "EGP 999"
};



$('.size').change(function(){
  document.getElementById('pprice').innerHTML = "<h3>" + price[$(this).val()] + "</h3>";
});


