
jQuery(document).ready(function() {

  function init() {
    initMaps()
  }

  function initMaps() {
    if(jQuery('#googlemaps').length) {
      window.addEventListener('load', showGoogleMaps);
    }
  }

  function showGoogleMaps(position, centerPosition) {
    var position = [19.417554, -99.162323]
    var centerPosition = [19.416967, -99.1574625]
    var latLng = new google.maps.LatLng(position[0], position[1])
    var center = new google.maps.LatLng(centerPosition[0], centerPosition[1])

    if (jQuery(window).width() < 768) {
      center = latLng
    }

    var mapOptions = {
      zoom: 16, // initialize zoom level - the max value is 21
      streetViewControl: false, // hide the yellow Street View pegman
      scaleControl: true, // allow users to zoom the Google Map
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: center,
      scrollwheel: false
    }

    var map = new google.maps.Map(document.getElementById('googlemaps'),
      mapOptions)

    // Show the default red marker at the location
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP
    })
  }

  jQuery(init)

});
