import React from 'react';
import ReactDOM from 'react-dom';
import CrawlEntry from './CrawlEntry.jsx';
import { items } from 'semantic-ui-react';

const CrawlEntryList = (props) => {
return (
    <div>
      <h1>Your Crawl</h1>
      <h2>Bar List</h2>
      <div class="ui items">
        {props.barAdded.map(function(bar, index) {
        return <CrawlEntry removebar={props.removebar} key={index} index={index} bar={bar}/>
        })}
      </div>
      <h5>Click 'x' to remove</h5>
    </div>
)
};

export default CrawlEntryList;