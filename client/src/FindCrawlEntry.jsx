import React from 'react';

class FindCrawlEntry extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      bars: this.props.crawl.bars,
      crawlName: this.props.crawl.name,
      description: this.props.crawl.description
    }
  }

  render() {
    return (
      <div
        style={{border: "solid", overflow: "hidden", padding: "10px"}}
        onClick={() => {this.props.entryClick(this.state)}}
      >
        <figure style={{width: "175px", height: "175px", float: "left"}}>
          <img
            src={'https://maps.googleapis.com/maps/api/place/photo?photoreference=' + this.props.crawl.bars[0].photo + '&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyCKqcPwsHVZEmOPMQkCmIGNvNLfV0TVyZc'}
          />
          <figcaption><em>{this.props.crawl.bars[0].name}</em></figcaption>
        </figure>
        <h4 style={{textAlign: "center", fontSize: "30px"}}>{this.props.crawl.name}</h4>
        <ul style={{textAlign: "center", listStyleType: "none"}}>
          <li>{this.props.crawl.bars[0].name}</li>
          <li>{this.props.crawl.bars[1].name}</li>
          <li>{this.props.crawl.bars[2].name}</li>
          {this.props.crawl.bars[3] && <li>{this.props.crawl.bars[3].name}</li>}
          {this.props.crawl.bars[4] && <li>{this.props.crawl.bars[4].name}</li>}
          {this.props.crawl.bars[5] && <li>{this.props.crawl.bars[5].name}</li>}
        </ul>
        <p style={{verticalAlign: "bottom", textAlign: "center"}}>{this.props.crawl.description}</p>
        <br/>
      </div>
    )
  }
}

export default FindCrawlEntry;
    // <img
    //   style={{width: "150px", height: "150px", float: "right"}}
    //   src={'https://maps.googleapis.com/maps/api/place/photo?photoreference=' + props.crawl.bars[2].photo + '&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyCKqcPwsHVZEmOPMQkCmIGNvNLfV0TVyZc'}
    // />