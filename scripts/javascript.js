
jQuery(document).ready(function() {
	jQuery('.toggle-nav').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.nav-main ul').toggleClass('active');

		e.preventDefault();
	});
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

