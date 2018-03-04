import React from 'react';
import ReactDOM from 'react-dom';

var getString = function(bars) {
  var resultStr = '';
  var barsFixed = [];
  let tempStr;
  for (var i = 0; i < bars.length; i++) {
    tempStr = bars[i].formatted_address;
    tempStr = tempStr.replace(/\s/g, '+');
    tempStr = tempStr.replace(/,/g, '');
    barsFixed.push(tempStr)
  }
  resultStr = '&origin=' + barsFixed[0] + '&waypoints=';
  for (var j = 1; j<barsFixed.length-2;j++) {
    resultStr = resultStr + barsFixed[j] + '|';
  }
  resultStr = resultStr + barsFixed[barsFixed.length-2];
  resultStr = resultStr + '&destination=' + barsFixed[barsFixed.length-1];
  resultStr = resultStr + '&mode=walking';
  return resultStr;
}

var mapStyle = {border: '0'};
const DirectionsMap = (props) => {
  console.log(props);
  var googleSrc = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCKqcPwsHVZEmOPMQkCmIGNvNLfV0TVyZc' + getString(props.crawlBars);
  console.log(getString(props.crawlBars));
  return (
    <div className="directions-map">
      <iframe
        width="600"
        height="450"
        frameBorder="0" style={mapStyle}
        src={googleSrc} allowFullScreen
      />
    </div>
  )
};

export default DirectionsMap;