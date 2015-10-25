$(document).ready(function() {

	getHeadBg();

	$(document).scroll(function() {
		getHeadBg();
	});


	function getHeadBg() {

		if($(".header-site").offset().top >= $(".header-site").height()) {

			$(".header-site").css({"background":"rgba(0, 0, 0, .8)"});

		}
	}

});





