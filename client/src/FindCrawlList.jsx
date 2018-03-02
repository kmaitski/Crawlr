import React from 'react';
import FindCrawlEntry from './FindCrawlEntry.jsx';

const FindCrawlList = (props) => {
  console.log(props);
return (
  <div>
    <h2>
      Here are the crawls in your city!
    </h2>
    {props.crawlList.map(crawl => {
      return <FindCrawlEntry crawl={crawl}/>
    })}

  </div>
)

}



export default FindCrawlList;