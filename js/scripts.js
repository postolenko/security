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

var wrap = document.getElementsByClassName("wrapper")[0];

var heightGradient =  document.getElementsByClassName("gradientheight")[0].offsetHeight;

// console.log(heightGradient);

var proportional = 1;

// if(document.getElementsByClassName("gradientheight")[0]  ||  document.getElementsByClassName("type-service-photo")[0]) {

// 	proportional = 1;

// } else {

// 	proportional = 1.5;
// }

// 310 = 2.1
// 410 = 1.59
// 470 = 1.38
// 550 = 1.18
// 650 = 1.02

// wrap.style.background = "-webkit-linear-gradient(top, rgba(0,0,0,"+0+") "+0+"%,rgba(0,0,0,0) "+(heightGradient/2.1)/proportional+"px,rgba(0,0,0,."+1+") "+(heightGradient/1.59)/proportional+"px,rgba(0,0,0,."+18+") "+(heightGradient/1.38)/proportional+"px,rgba(0,0,0,."+6+") "+(heightGradient/1.18)/proportional+"px,rgba(0,0,0,"+1+") "+(heightGradient/1.01)/proportional+"px,rgba(0,0,0,"+1+") "+100+"%)";
// wrap.style.background = "-moz-linear-gradient(top, rgba(0,0,0,"+0+") "+0+"%,rgba(0,0,0,0) "+310/proportional+"px,rgba(0,0,0,."+1+") "+410/proportional+"px,rgba(0,0,0,."+3+") "+470/proportional+"px,rgba(0,0,0,."+6+") "+550/proportional+"px,rgba(0,0,0,"+1+") "+660/proportional+"px,rgba(0,0,0,"+1+") "+100+"%)";
// wrap.style.background = "-ms-linear-gradient(top, rgba(0,0,0,"+0+") "+0+"%,rgba(0,0,0,0) "+310/proportional+"px,rgba(0,0,0,."+1+") "+410/proportional+"px,rgba(0,0,0,."+18+") "+470/proportional+"px,rgba(0,0,0,."+6+") "+550/proportional+"px,rgba(0,0,0,"+1+") "+660/proportional+"px,rgba(0,0,0,"+1+") "+100+"%)";
// wrap.style.background = "-o-linear-gradient(top, rgba(0,0,0,"+0+") "+0+"%,rgba(0,0,0,0) "+310/proportional+"px,rgba(0,0,0,."+1+") "+410/proportional+"px,rgba(0,0,0,."+18+") "+470/proportional+"px,rgba(0,0,0,."+6+") "+550/proportional+"px,rgba(0,0,0,"+1+") "+660/proportional+"px,rgba(0,0,0,"+1+") "+100+"%)";
// wrap.style.background = "linear-gradient(top, rgba(0,0,0,"+0+") "+0+"%,rgba(0,0,0,0) "+310/proportional+"px,rgba(0,0,0,."+1+") "+410/proportional+"px,rgba(0,0,0,."+18+") "+470/proportional+"px,rgba(0,0,0,."+6+") "+550/proportional+"px,rgba(0,0,0,"+1+") "+660/proportional+"px,rgba(0,0,0,"+1+") "+100+"%)";


var countRisizeForNav = 0;
var countClearResizeForNav = 0;

var w = window,
	d = document,
	e = d.documentElement,
	g = d.getElementsByTagName('body')[0],
	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

getResponsiveNav(bodyWidth);

$(window).resize(function() {

	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	getResponsiveNav(bodyWidth);

});


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



$(".responsive-btn").click(function() {

	$(".logo-image").toggleClass("hide-logo");
	$(".responsive-box").toggleClass("show-responsive-box");

	// $(".responsive-box").toggle({"top":"0"});
// $(".responsive-box").slideToggle( "slow" );

// $( ".responsive-box" ).toggle( display );


	if( $(".responsive-box").offset().top < 0 || $(".logo-image").hasClass("hide-logo")) {

		// $(".logo-image").addClass("hide-logo");
// $(".responsive-box").toggleClass("show-responsive-box");
		console.log($(".responsive-box").offset().top);

		$(".responsive-box").animate({"top":"0"},700);
		// console.log($(".responsive-box").offset().top);
		if($(".services-menu-responsive div").hasClass("serv-m") != true) {

			console.log($(".services-menu-responsive div").hasClass("serv-m"));

			$(".services-menu-responsive").append("<div class='serv-m'></div>");

				$(".serv-m").load("servisecmenu_responsive.html", function() {

					$(".services-menu-responsive").append("<div class='hide-scroll'></div>");

					$(".services-menu-responsive").height($(window).height() - $(".main-nav").outerHeight() - $(".headers-contacts").height());


			});

		}

	} else {

		// $(".logo-image").removeClass("hide-logo");

		$(".responsive-box").animate({"top":-110 + "%"},700);

	}

});








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

