$('.menu-burger, .menu-items').on('click', function() {
  $('body').addClass('noscroll');
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-bg, .menu-items').toggleClass('hidden');
  $('.menu-burger').toggleClass('green-background');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});
