import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import BarMap from './BarMap.jsx';
import axios from 'axios';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barLocations: [],
      location: 'Austin,tx'
    };
  }

  componentDidMount() {
    axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+${this.state.location}&key=AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0.json`).then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
      <BarMap google={this.props.google} />
      </div>
    )
  }
 }

 export default GoogleApiWrapper({
  apiKey: 'AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0',
 })(MapContainer)