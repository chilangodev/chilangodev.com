function showGoogleMaps() {
  if (!document.querySelector('#googlemaps')) return

  let position = [19.417554, -99.162323]
  let centerPosition = [19.416967, -99.1574625]
  let latLng = new google.maps.LatLng(position[0], position[1])
  let center = new google.maps.LatLng(centerPosition[0], centerPosition[1])

  if (window.innerWidth < 768) {
    center = latLng
  }

  let mapOptions = {
    zoom: 16, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    scaleControl: true, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: center,
    scrollwheel: false
  }

  let map = new google.maps.Map(document.getElementById('googlemaps'),
    mapOptions)

  // Show the default red marker at the location
  let marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  })
}

