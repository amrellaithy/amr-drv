$(document).foundation();

$(document).ready(function(){
  // $('.home-slider').slick({
  //   autoplay: true,
  //   fade: true,
  //   arrows: true,
  //   dots: true,
  //   pauseOnHover: false,
  //   lazyLoad: true
  // });



$('.main-gallery').flickity({
  imagesLoaded: true,
  pageDots: true,
  wrapAround: false,
  freescroll: false,
  contain: true
});



  $('.dropdown_button').click(function() {
    $('.dropdown_menu').slideToggle(300, function() {
    });
    return false;
  });

  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 40
  });






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


