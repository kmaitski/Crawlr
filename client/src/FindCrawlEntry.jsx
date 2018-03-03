import React from 'react';

const FindCrawlEntry = (props) => {
console.log(props);
return (
  <div>
    <p>{props.crawl.name}</p>
    <ul>
      <li>{props.crawl.bars[0].name}</li>
      <li>{props.crawl.bars[1].name}</li>
      {props.crawl.bars[2] &&<li>{props.crawl.bars[2].name}</li>}
      {props.crawl.bars[3] && <li>{props.crawl.bars[3].name}</li>}
      {props.crawl.bars[4] && <li>{props.crawl.bars[4].name}</li>}
      {props.crawl.bars[5] && <li>{props.crawl.bars[5].name}</li>}
    </ul>
    <p>{props.crawl.description}</p>
    <br/>
  </div>
)
}

export default FindCrawlEntry;