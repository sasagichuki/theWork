
$(document).ready(function() {

	// Video PopUp
	// This is my PopUp video
	$(".popup").click(function () {
	    var $this = $(this);
	    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 1280, "height": 800});
	    var $title = $("<h1>").text($this.data("title"));
	    $("#video-view").html($title).append($iframe);
	    $iframe.wrap("<div class='class-video'>");
	});

  $('.full-screen-modal').click(function(e){
    e.preventDefault();
    $("#slider").carousel("pause");
    $(this.dataset.target).modal();
  });

	//Instantiate/Activate carousel
  $('.intro-slider').slick({
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 9000,
      centerMode: false,
      centerPadding: '60px'
  });

  $('.text-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 9000,
      centerMode: false,
      centerPadding: '60px',
      prevArrow: '<i class="fa fa-angle-left fa-3x slick-control prev" aria-hidden="true"></i>',
      nextArrow: '<i class="fa fa-angle-right fa-3x slick-control next" aria-hidden="true"></i>'
  });

  $('#videoModal').on('hidden.bs.modal', function () {
    $('#videoModal iframe').attr('src', videoSRC);
  })

});

// Scroll to called div
function scrollPage(nextDiv){
  $('html,body').animate({
    scrollTop: $(nextDiv).offset().top - 50},
    1000
  );
}

function videoPlay(src) {
  $("#slider").carousel("pause");
  var theModal = '#videoModal';
  videoSRC = src;
  videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
  $(theModal + ' iframe').attr('src', videoSRCauto);
  $(theModal + ' button.close').click(function () {
    $(theModal + ' iframe').attr('src', videoSRC);
  });
  $('#videoModal').modal();
};

//Fix navbar ontop when necessary
function fixTop () {
	document.getElementById("nav-bar").classList.add('fix-top');
  if (document.body.scrollTop == 0) {
		document.getElementById("nav-bar").classList.remove('fix-top');
  }
}
