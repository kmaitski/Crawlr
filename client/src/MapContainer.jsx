import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import BarMap from './BarMap.jsx';
import axios from 'axios';
import $ from 'jquery';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <BarMap
      addbar={this.props.addbar}
      baradded={this.props.baradded}
      barlist={this.props.barlist}
      location={this.props.location}
      google={this.props.google} />
      </div>
    )
  }
 }

 export default GoogleApiWrapper({
  apiKey: 'AIzaSyAkRQG5OG1z4VNep44EcCu1wdsGUq3_6X4',
 })(MapContainer)