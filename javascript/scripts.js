 
 $('.carousel-3d-autoplay-off').mdbCarousel3d({
    autoplay: false
  });
  $('.card').hover(function () {
    $(this).children('.card-1').fadeToggle(1000, 'linear');
  });
  $('*').hide();