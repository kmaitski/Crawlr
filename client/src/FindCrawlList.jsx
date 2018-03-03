import React from 'react';
import FindCrawlEntry from './FindCrawlEntry.jsx';

const FindCrawlList = (props) => {
  console.log(props);
return (
  <div>
    <h2>Here are the crawls in your city!</h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px", gridAutoRows: "minMax(200px, auto)"}}>
        {props.crawlList.map((crawl, i) => {
          return <FindCrawlEntry crawl={crawl} key={i}/>
        })}
      </div>

  </div>
)

}



export default FindCrawlList;