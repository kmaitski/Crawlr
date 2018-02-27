import React from 'react';
import ReactDOM from 'react-dom'

const CrawlEntry = (props) => (
  <ul key={props.bar.id} className="bar-entry">{props.bar.name}</ul>
);

export default CrawlEntry;