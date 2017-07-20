
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

	//Instantiate/Activate carousel
	$("#slider").carousel({interval: 9000});
	$("#mySlide_Text").carousel({interval: 9000});


  $('.text-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 7000,
      centerMode: false,
      centerPadding: '60px',
      responsive: [{
          breakpoint: 992,
          settings: {
              arrows:true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
          }

      }, {
          breakpoint: 800,
          settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 1

          }


      }, {
          breakpoint: 600,
          settings: {
              arrows: true,

          }
      }, {
          breakpoint: 480,
          settings: {
              arrows: true,
          }
      }]
  });


});

//Fix navbar ontop when necessary
function fixTop () {
	document.getElementById("nav-bar").classList.add('fix-top');
  if (document.body.scrollTop == 0) {
		document.getElementById("nav-bar").classList.remove('fix-top');
  }
}