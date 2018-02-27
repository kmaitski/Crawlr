import React from 'react';
import ReactDOM from 'react-dom'
import CrawlEntry from './CrawlEntry.jsx';

const CrawlEntryList = (props) => {
return (
    <div className="crawl-list">
    <h2>Crawl Editor</h2>
    <ul>
      {props.barAdded.map(bar=>
      <CrawlEntry key={bar.id} bar={bar}/>
      )}
    </ul>
    </div>
)
};

export default CrawlEntryList;