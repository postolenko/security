$(document).ready(function() {	


	var countRisizeForNav = 0;
	var countClearResizeForNav = 0;

	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	getResponsiveNav(bodyWidth);
	responsiveService(bodyWidth);


	$(window).resize(function() {

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		getResponsiveNav(bodyWidth);
		responsiveService(bodyWidth);

	});



	$(".responsive-btn").click(function() {

		$(".logo-image").toggleClass("hide-logo");

		$(".responsive-box").toggleClass("show-responsive-box");

		if( $(".responsive-box").offset().top < 0 || $(".logo-image").hasClass("hide-logo")) {


			$(".responsive-box").animate({"top":"0"},700);

			if($(".services-menu-responsive div").hasClass("serv-m") != true) {

				$(".services-menu-responsive").append("<div class='serv-m'></div>");

					$(".serv-m").load("servisecmenu_responsive.html", function() {

						$(".services-menu-responsive").append("<div class='hide-scroll'></div>");

						$(".services-menu-responsive").height($(window).height() - $(".main-nav").outerHeight() - $(".headers-contacts").height());


				});

			}

		} else {

			$(".responsive-box").animate({"top":-110 + "%"},700);

		}

	});




	// if( document.getElementsByClassName("map-box")[0] ) {

	// 		var map;

	// 		var marker;
	// 		var image = 'img/marker.png';

	// 		var styles;


	// 		function initMap() {

	// 			var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

	// 			var styledMap = new google.maps.StyledMapType(styles,
	// 			{name: "Styled Map"});

	// 			map = new google.maps.Map(document.getElementById('map'), {
	// 				center: {lat: 55.7887, lng: 49.1157},
	// 				scrollwheel: false,
	// 				scaleControl: false,
	// 				zoom: 15
	// 			});

	// 			marker = new google.maps.Marker({
	// 				map: map,
	// 				draggable: true,
	// 				animation: google.maps.Animation.DROP,
	// 				position: {lat: 55.7884, lng: 49.1154},
	// 				map: map,
	// 				icon: image,
	// 				title: 'Империя'
	// 			});

	// 			marker.addListener('click', toggleBounce);

	// 			//Associate the styled map with the MapTypeId and set it to display.
	// 			map.mapTypes.set('map_style', styledMap);
	// 			map.setMapTypeId('map_style');


	// 		}

	// 			function toggleBounce() {
	// 			  if (marker.getAnimation() !== null) {
	// 			    marker.setAnimation(null);
	// 			  } else {
	// 			    marker.setAnimation(google.maps.Animation.BOUNCE);
	// 			  }
	// 			}

	// 	}



		function responsiveService() {

			if( $(".content div").hasClass("service-page") && $(".content div").hasClass("type-service-photo")) {

				$(".service-page-gradient").css({"height":$(".services-menu-services-page").height() +"px",
				"top": $(".type-service-head-content").height() + "px"});

			}else if ($(".content div").hasClass("service-page") ) {

				$(".service-page-gradient").css({"height":$(".services-menu-services-page").height() + $(".type-service-head-content").height() +"px",
					"top": 0 + "px"});

			}

		}



		function getResponsiveNav(bodyWidth) {

			if(bodyWidth <= 768) {
				$(".responsive-box").css({"top":"-110%"});
			}

			if(bodyWidth > 768) {
				$(".services-menu-responsive").css({"height":"0"});
			}

			if(bodyWidth > 768 && $(".services-menu-responsive div").hasClass("serv-m")) {

				$(".serv-m").remove();
				

				if( $(".logo-image").hasClass("hide-logo") ) {

					$(".logo-image").removeClass("hide-logo");

				}

			}

		}




		function responsiveService(bodyWidth) {

			if( $(".content div").hasClass("service-page") && $(".service-photos-box img")[0] && bodyWidth >= 768) {

				if($(".wrapper").hasClass("servisec-gradient-without-photo-ormobile")) {

					$(".wrapper").removeClass("servisec-gradient-without-photo-ormobile");

				}

				$(".wrapper").addClass("servisec-gradient-with-photo");

			} else if ( ( $(".content div").hasClass("service-page") && $(".service-photos-box img").length == 0 ) || 
				     	( $(".content div").hasClass("service-page") && bodyWidth < 768 ) ) {

				$(".wrapper").addClass("servisec-gradient-without-photo-ormobile");

			}


			if( bodyWidth <= 768 ) {

				$(".service-photos-box").css({"top": 70 + "px"});

				$(".type-service-head-content").css({"margin-top": $(".service-photos-box").height() + "px"});

			} else {

				$(".service-photos-box").css({"top":""});

				$(".type-service-head-content").css({"margin-top": ""});

			}

		}


});


// function responsiveService() {

// 	if( $(".content div").hasClass("service-page") && $(".content div").hasClass("type-service-photo")) {

// 		$(".service-page-gradient").css({"height":$(".services-menu-services-page").height() +"px",
// 		"top": $(".type-service-head-content").height() + "px"});

// 	}else if ($(".content div").hasClass("service-page") ) {

// 		$(".service-page-gradient").css({"height":$(".services-menu-services-page").height() + $(".type-service-head-content").height() +"px",
// 			"top": 0 + "px"});

// 	}

// }




// $(window).resize(function() {

// 	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

// 	getResponsiveNav(bodyWidth);
// 	responsiveService(bodyWidth);

// });


// function getResponsiveNav(bodyWidth) {

// 	if(bodyWidth <= 768) {
// 		$(".responsive-box").css({"top":"-110%"});
// 	}

// 	if(bodyWidth > 768) {
// 		$(".services-menu-responsive").css({"height":"0"});
// 	}

// 	if(bodyWidth > 768 && $(".services-menu-responsive div").hasClass("serv-m")) {

// 				$(".serv-m").remove();
				

// 				if( $(".logo-image").hasClass("hide-logo") ) {

// 					$(".logo-image").removeClass("hide-logo");

// 				}

// 	}

// }


// function responsiveService(bodyWidth) {

// 	if( $(".content div").hasClass("service-page") && $(".service-photos-box img")[0] && bodyWidth >= 768) {

// 		if($(".wrapper").hasClass("servisec-gradient-without-photo-ormobile")) {

// 			$(".wrapper").removeClass("servisec-gradient-without-photo-ormobile");

// 		}

// 		$(".wrapper").addClass("servisec-gradient-with-photo");

// 	} else if ( ( $(".content div").hasClass("service-page") && $(".service-photos-box img").length == 0 ) || 
// 		     	( $(".content div").hasClass("service-page") && bodyWidth < 768 ) ) {

// 		$(".wrapper").addClass("servisec-gradient-without-photo-ormobile");

// 	}


// 	if( bodyWidth <= 768 ) {

// 		$(".service-photos-box").css({"top": 70 + "px"});

// 		$(".type-service-head-content").css({"margin-top": $(".service-photos-box").height() + "px"});

// 	} else {

// 		$(".service-photos-box").css({"top":""});

// 		$(".type-service-head-content").css({"margin-top": ""});

// 	}

// }



// $(".responsive-btn").click(function() {

// 	$(".logo-image").toggleClass("hide-logo");
// 	$(".responsive-box").toggleClass("show-responsive-box");

// 	if( $(".responsive-box").offset().top < 0 || $(".logo-image").hasClass("hide-logo")) {


// 		$(".responsive-box").animate({"top":"0"},700);

// 		if($(".services-menu-responsive div").hasClass("serv-m") != true) {

// 			$(".services-menu-responsive").append("<div class='serv-m'></div>");

// 				$(".serv-m").load("servisecmenu_responsive.html", function() {

// 					$(".services-menu-responsive").append("<div class='hide-scroll'></div>");

// 					$(".services-menu-responsive").height($(window).height() - $(".main-nav").outerHeight() - $(".headers-contacts").height());


// 			});

// 		}

// 	} else {

// 		$(".responsive-box").animate({"top":-110 + "%"},700);

// 	}

// });








// if( document.getElementsByClassName("map-box")[0] ) {

// 	var map;

// 	var marker;
// 	var image = 'img/marker.png';

// 	var styles;


// 	function initMap() {

// 		var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

// 		var styledMap = new google.maps.StyledMapType(styles,
// 		{name: "Styled Map"});

// 		map = new google.maps.Map(document.getElementById('map'), {
// 			center: {lat: 55.7887, lng: 49.1157},
// 			scrollwheel: false,
// 			scaleControl: false,
// 			zoom: 15
// 		});

// 		marker = new google.maps.Marker({
// 			map: map,
// 			draggable: true,
// 			animation: google.maps.Animation.DROP,
// 			position: {lat: 55.7884, lng: 49.1154},
// 			map: map,
// 			icon: image,
// 			title: 'Империя'
// 		});

// 		marker.addListener('click', toggleBounce);

// 		//Associate the styled map with the MapTypeId and set it to display.
// 		map.mapTypes.set('map_style', styledMap);
// 		map.setMapTypeId('map_style');


// 	}

// 		function toggleBounce() {
// 		  if (marker.getAnimation() !== null) {
// 		    marker.setAnimation(null);
// 		  } else {
// 		    marker.setAnimation(google.maps.Animation.BOUNCE);
// 		  }
// 		}

// }






if( document.getElementsByClassName("map-box")[0] ) {

			var map;

			var marker;
			var image = 'img/marker.png';

			var styles;


			function initMap() {

				var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

				var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map"});

				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: 55.7887, lng: 49.1157},
					scrollwheel: false,
					scaleControl: false,
					zoom: 15
				});

				marker = new google.maps.Marker({
					map: map,
					draggable: true,
					animation: google.maps.Animation.DROP,
					position: {lat: 55.7884, lng: 49.1154},
					map: map,
					icon: image,
					title: 'Империя'
				});

				marker.addListener('click', toggleBounce);

				//Associate the styled map with the MapTypeId and set it to display.
				map.mapTypes.set('map_style', styledMap);
				map.setMapTypeId('map_style');


			}

				function toggleBounce() {
				  if (marker.getAnimation() !== null) {
				    marker.setAnimation(null);
				  } else {
				    marker.setAnimation(google.maps.Animation.BOUNCE);
				  }
				}

		}

