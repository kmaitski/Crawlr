import React from 'react';
import ReactDOM from 'react-dom'

const CrawlEntry = (props) => (
  <div>
    {props.barAdded.map(bar=> 
      <div>{bar.name}</div>
    )}
  </div>
);

export default CrawlEntry;