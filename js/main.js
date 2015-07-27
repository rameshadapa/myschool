function initialize() {

  var markers = [];
  var mapOptions = {
	zoom: 16,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	panControl: false,
	scaleControl: false,
	mapTypeControl: false,
	streetViewControl: false,
	overviewMapControl: false,
	zoomControl: true,
	zoomControlOptions: {
	  style: google.maps.ZoomControlStyle.SMALL
	}
  };
  var map = new google.maps.Map(document.getElementById('search'), mapOptions);

  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));
  map.fitBounds(defaultBounds);

  // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('search-box'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function (){

  // create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(17.6883, 83.2186);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

//  var markers = [];
  // initialize the map object
//  var mapSearch = new google.maps.Map(document.getElementById('search'), options);
  var mapContact = new google.maps.Map(document.getElementById('google_map'), options);

/*  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));
  mapSearch.fitBounds(defaultBounds);

  // Add search box on Search Map.
  var input = (document.getElementById('search-box'));
  mapSearch.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var searchBox = new google.maps.places.SearchBox((input));

  //search item listener.
  google.maps.event.addListener(searchBox, "places_changed", function() {
    var places = searchBox.getPlaces();
    if(places.length == 0) {
	return;
    }

    for(var i=0, marker; marker = markers[i]; i++) {
	marker.setMap(null);
    }
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for(var i=0, place; place = places[i]; i++)
    {
	var image = {
	  url: place.icon,
	  size: new google.maps.Size(71, 71),
	  origin: new google.maps.Point(0, 0),
	  anchor: new google.maps.Point(17, 34),
	  scaledSize: new google.maps.Size(25, 25)
	};

	var marker = new google.maps.Marker({
	  map: mapSearch,
	  icon: image,
	  title: place.name,
	  position: place.geometry.location
	});

	markers.push(marker);
	bounds.extend(place.geometry.location);
    }
    mapSearch.fitBounds(bounds);
  });

  google.maps.event.addListener(mapSearch, "bounds_changed", function() {
    var bounds = mapSearch.getBounds();
    searchBox.setBounds(bounds);
  });
*/
  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: mapContact
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(mapContact, marker1);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> Visakhapatnam, A.P., India.</div>'
  });  

  /*Page scroll*/
  $.localScroll()
});
