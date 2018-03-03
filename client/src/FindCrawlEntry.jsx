import React from 'react';

const FindCrawlEntry = (props) => {
console.log(props);
return (
  <div style={{border: "solid", overflow: "hidden", padding: "10px"}}>
    <img
      style={{width: "175px", height: "175px", float: "left"}}
      src={'https://maps.googleapis.com/maps/api/place/photo?photoreference=' + props.crawl.bars[0].photo + '&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyCKqcPwsHVZEmOPMQkCmIGNvNLfV0TVyZc'}
    />
    <h4 style={{textAlign: "center", fontSize: "30px"}}>{props.crawl.name}</h4>
    <ul style={{textAlign: "center", listStyleType: "none"}}>
      <li>{props.crawl.bars[0].name}</li>
      <li>{props.crawl.bars[1].name}</li>
      {props.crawl.bars[2] &&<li>{props.crawl.bars[2].name}</li>}
      {props.crawl.bars[3] && <li>{props.crawl.bars[3].name}</li>}
      {props.crawl.bars[4] && <li>{props.crawl.bars[4].name}</li>}
      {props.crawl.bars[5] && <li>{props.crawl.bars[5].name}</li>}
    </ul>
    <p style={{verticalAlign: "bottom", textAlign: "center"}}>{props.crawl.description}</p>
    <br/>
  </div>
)
}

export default FindCrawlEntry;
    // <img
    //   style={{width: "150px", height: "150px", float: "right"}}
    //   src={'https://maps.googleapis.com/maps/api/place/photo?photoreference=' + props.crawl.bars[2].photo + '&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyCKqcPwsHVZEmOPMQkCmIGNvNLfV0TVyZc'}
    // />