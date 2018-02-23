import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import BarMap from './BarMap.jsx';
import axios from 'axios';
import $ from 'jquery';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barLocations: [],
      location: 'Austin,tx'
    };
  }

  componentDidMount() {
    // $.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+${this.state.location}&key=AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0`, {'headers': {'Access-Control-Allow-Origin': '*'}}, data => {
    //   console.log(data);
    // });
  // $.getJSON({
  // url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+${this.state.location}&key=AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0`,
  // crossDomain: true,
  // dataType: 'jsonp',
  // contentType: 'application/json',
  // // method: 'GET',
  // headers: {'Access-Control-Allow-Origin': '*'},
  // error: error => {
  //   console.log(error);
  // },
  // success: function( data ) {
  //   console.log(data);
  // }
  // })

//   $.getJSON( {
//     url  : `https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+${this.state.location}&key=AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0`,
//     data : {
//         sensor  : false,
//         address : address
//     },
//     success : function( data, textStatus ) {
//         console.log( textStatus, data );
//     }
// } );

  $.ajax({
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+${this.state.location}&key=AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0`,
      dataType: 'JSONP',
      jsonpCallback: 'callback',
      type: 'GET',
      success: function (data) {
          // console.log(data);
      }
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