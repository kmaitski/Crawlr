import React from 'react';
import ReactDOM from 'react-dom';
import Google from 'google-maps-react';

class BarMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props);
    console.log(Google);
    this.loadMap();
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if(prevProps.location !== this.props.location) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const location = this.props.location
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = document.getElementById('map');
      const node = ReactDOM.findDOMNode(mapRef);
      const mapConfig = Object.assign({}, {

        center: location,
        zoom: 13,
        getsureHandling: 'cooperative',
        mapTypeId: 'terrain'
      });
      this.map = new maps.Map(node, mapConfig);
      this.props.barlist.map(bar => {
        const marker = new google.maps.Marker({
          position: {lat: bar.geometry.location.lat, lng: bar.geometry.location.lng},
          map: this.map,
          title: bar.name,
        });
      })
    }
  }

  render() {
    const style = {
      width: '100vw',
      height: '75vh'
    }
    return (
      <div ref="map" id="map" style={style}>
        loading map...
      </div>
    )
  }
}

export default BarMap;