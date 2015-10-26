// $(document).ready(function() {

// 	getHeadBg();

// 	$(document).scroll(function() {
// 		getHeadBg();
// 	});


// 	function getHeadBg() {

// 		if($(".header-site").offset().top >= $(".header-site").height()) {

// 			$(".header-site").css({"background":"rgba(0, 0, 0, .8)"});

// 		}
// 	}

// });



var map;

var marker;
var image = 'img/marker.png';

var styles;


function initMap() {

// Create an array of styles.
  var styles = [
    { 
    	featureType: "administrative",
    	elementType: "labels.text.stroke",
    	stylers: [
    	{ color: "#272727" } ]
    },{ 
    	featureType: "landscape",
    	stylers: [
    	{ color: "#333333" } ]
    },{ 
    	featureType: "administrative", 
    	elementType: "labels.text.stroke", 
    	stylers: [
    	{ color: "#272727" } ]
    },{ 
    	featureType: "poi.park",
    	stylers: [
    	{ color: "#333333" } ]
    },{ 
    	featureType: "poi", 
    	elementType: "labels.text.fill", 
    	stylers: [
    	{ color: "#808080" } ]
    },{ 
    	featureType: "poi", 
    	elementType: "labels.text.stroke", 
    	stylers: [
    	{ color: "#272727" } ]
    },{
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" },
        {color: "#333333"}
      ]
    },{
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" },
        {color: "#2b2b2b"}
      ]
    },{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" },
        {color: "#2b2b2b"}
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" },
        {color: "#2e2e2e"}
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { color:"#5d5d5d" }
      ]
    },{
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        { color:"#262626" }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});



  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.7887, lng: 49.1157},
    scrollwheel: false,
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





