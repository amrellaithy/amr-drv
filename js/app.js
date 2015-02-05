$(document).foundation();

$(document).ready(function(){
  $('.home-slider').slick({
    autoplay: true,
    fade: true
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


