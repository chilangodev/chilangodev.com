
jQuery(document).ready(function() {

  function init() {
    initMaps()
  }

  function initMaps() {
    if(jQuery('#googlemaps').length) {
      google.maps.event.addDomListener(window, 'load', showGoogleMaps)
    }
  }

  function showGoogleMaps(position, centerPosition) {
    var position = [19.4114671, -99.1675351]
    var centerPosition = [19.4107671, -99.1681351]
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
