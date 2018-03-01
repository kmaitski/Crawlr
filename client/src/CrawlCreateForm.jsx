import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Menu } from 'semantic-ui-react';

const CrawlCreateForm = (props) => {
return (
    <div>
      <h2 className="ui header">
      <i aria-hidden="true" className="beer icon"></i>
      <div className="content">Your Crawl</div>
      </h2>
      <h4>Crawl Name</h4>
      <div className="ui input">
      <input type="text" id="crawl-name" placeholder="Crawl name"></input>
      </div>
      <h4>Bar List</h4>
      <div className="ui items">
        {props.barAdded.map(function(bar) {
        return (<li key={bar.id}>{bar.name}</li>)
        })}
      </div>
      <h4>Crawl Description</h4>
      <div className="ui input">
      <input type="text" id="crawl-description" placeholder="Write desciption here" />
      </div>
      <button className="ui button"
              role="button"
              type="submit"
              onClick={props.savecrawl}
      >
        Upload Your Crawl!
      </button>
    </div>
)
};

export default CrawlCreateForm;