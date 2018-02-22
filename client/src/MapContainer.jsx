import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import BarMap from './BarMap.jsx';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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