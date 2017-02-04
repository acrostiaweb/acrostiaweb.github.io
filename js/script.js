$(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor : ['#2c3e50', '#b24a50', '#665464', '#81a256', '#75b4aa'],
      controlArrows: true,
      continuousVertical: true,
      slidesNavigation: true
    });
});

$(document).ready(function(){
	var width_w = $(window).width();
	if (width_w<641) {
		var pad = 20;
		var width_do = width_w-pad;
		$(".content").width(width_do);
	} else if (width_w>=641 && width_w<1111) {
		var pad = 60;
		var width_do = width_w-pad;
		$(".content").width(width_do);
	} else{
		var width_do = 1100;
		$(".content").width(width_do);
	}
});

$(window).resize(function(){
	var width_w = $(window).width();
	if (width_w<641) {
		var pad = 20;
		var width_do = width_w-pad;
		$(".content").width(width_do);
	} else if (width_w>=641 && width_w<1111) {
		var pad = 60;
		var width_do = width_w-pad;
		$(".content").width(width_do);
	} else{
		var width_do = 1100;
		$(".content").width(width_do);
	}
});

$(document).ready(function(){
	$( "#my_tabs" ).tabs();
});



var lat = $('.lat').attr("data-lat");
var lag = $('.lng').attr("data-lng");

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
/*
google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(lat, lag), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lag),
                    map: map,
                    title: 'Snazzy!'
                });
            }
*/

