
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
  $('.text-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 9000,
      centerMode: false,
      centerPadding: '60px'
  });

  $('.full-screen-modal').click(function(){
    $("#slider").carousel("pause");
    $("#bobModal").modal();
  });


});

//Fix navbar ontop when necessary
function fixTop () {
	document.getElementById("nav-bar").classList.add('fix-top');
  if (document.body.scrollTop == 0) {
		document.getElementById("nav-bar").classList.remove('fix-top');
  }
}
