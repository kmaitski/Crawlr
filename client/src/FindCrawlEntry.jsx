import React from 'react';

const FindCrawlEntry = (props) => (
  <div>
    <p>{props.crawl.name}</p>
    <p>{props.crawl.description}</p>
  </div>
)

export default FindCrawlEntry;