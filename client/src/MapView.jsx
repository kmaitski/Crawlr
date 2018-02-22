 var infowindow;
import React from 'react';
import ReactDOM from 'react-dom'
class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  initMap() {
    var center = new google.maps.LatLng(37.422, -122.08058);
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: center
    });

    var request = {
      location: center,
      radius: 16047,
      types: ['bars']
    }

    infowindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);
  }

  callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  // google.maps.event.addListener(marker, 'click', function() {
  //   infowindow.setContent(place.name);
  //   infowindow.open(map, this);
  // }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    })
  }
  render() {
  }
}

export default MapView;