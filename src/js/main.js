$(document).ready(function() {
  $('#navbar').addClass('navbar-right');
  $('header,section').css({
    'min-height': $(window).height() + 'px',
    'padding-bottom' : '100px'
  });
  $('#preview-img img').css('max-height', ($(window).height() - 50) + 'px');

  $('.portfolio-imgs img').click(function(event) {
    $('#preview-img img').attr('src', $(this).attr('src'));
    $('#preview-img').fadeIn('slow');
  });

  $('.nav.navbar-nav a').animateScroll({
    speed:1000
  });
});
