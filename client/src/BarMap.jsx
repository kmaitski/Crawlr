import React from 'react';
import ReactDOM from 'react-dom';

class BarMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = document.getElementById('map');
      const node = ReactDOM.findDOMNode(mapRef);
      const mapConfig = Object.assign({}, {
        center: {lat: 30.2672, lng: -97.7431},
        zoom: 10,
        getsureHandling: 'cooperative',
        mapTypeId: 'terrain'
      });
      this.map = new maps.Map(node, mapConfig);
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