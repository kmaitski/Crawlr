import React from 'react';
import ReactDOM from 'react-dom'
import CrawlEntry from './CrawlEntry.jsx';

const CrawlEntryList = (props) => {
return (
    <ul>
      <CrawlEntry bar={props.newBar}/>
    </ul>
)
};

export default CrawlEntryList;