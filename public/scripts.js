console.log('... loaded');

$(function(){

  $('section').hide();

  $('.static').on('click', function(){
    $('#overlay').hide();
    $('#static').hide();
    $('section').show().fadeIn('slow');
    $('body').css('background-color', 'whitesmoke');
    $('.profile-section').css('background-color', 'whitesmoke');
    // $('section').show().fadeIn(1000);
  });

  $("#projects-link").click(function() {
    $('html, body').animate({
      scrollTop: $(".projects-section").offset().top
    }, 400);
  });

  $("#contact-link").click(function() {
    $('html, body').animate({
      scrollTop: $(".contact-section").offset().top
  }, 500);
  });

  // $("#projects-link").animate({ top: 305 }, {duration: 1000, easing: 'easeOutBounce'});

  $('a').click(function(){
    $(this).blur();
  });

});
