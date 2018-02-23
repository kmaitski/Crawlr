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
      <BarMap barlist={this.props.barlist} location={this.props.location} google={this.props.google} />
      </div>
    )
  }
 }

 export default GoogleApiWrapper({
  apiKey: 'AIzaSyCDKWpDcmNdporMyWf-4gLaf2X75zGFdnE',
 })(MapContainer)