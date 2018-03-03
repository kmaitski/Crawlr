import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'semantic-ui-react';
import FindCrawlList from './FindCrawlList.jsx';
import DirectionsMap from'./DirectionsMap.jsx';
import FindCrawlSingleEntry from './FindCrawlSingleEntry.jsx';
import {Grid} from 'semantic-ui-react';

class FindPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      entryView: false,
      directionView: false,
      bars: [],
      crawlName: '',
      description: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.entryClick = this.entryClick.bind(this);
    this.goBackToEntries = this.goBackToEntries.bind(this);
    // console.log(this.props.crawls.length);
  }
  handleInputChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }
  submitClick(e) {
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    // console.log(this.props);
    // console.log('hit submitclick in search.jsx');
    this.props.onSubmit(this.state.searchText);
    this.setState({entryView: true});
    e.preventDefault();
  }

  entryClick(state) {
    // console.log(state);
    this.setState({
      entryView: false,
      directionView: true,
      bars: state.bars,
      crawlName: state.crawlName,
      description: state.description
    });
  }

  goBackToEntries() {
    console.log(1);
    this.setState({
      entryView: true,
      directionView: false
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.submitClick(e)}}>
          <Input
          className="input"
          type = "text"
          value={this.state.searchText}
          onChange={this.handleInputChange}
          placeholder="Enter city... "
          />
          <Input type="submit" icon="search" value = "Search">
          </Input>
        </form>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div>
            {this.state.entryView && !this.state.directionView && <FindCrawlList crawlList={this.props.crawls} entryClick={this.entryClick} />}
          </div>
          <div>
            {this.state.directionView && <DirectionsMap crawlBars={this.state.bars} />}
          </div>
          <div style={{paddingLeft: "200px"}}>
            {this.state.directionView && <FindCrawlSingleEntry name={this.state.crawlName} bars={this.state.bars} description={this.state.description} goBackToEntries={this.goBackToEntries} />}
          </div>
        </div>
      </div>
    )
  }
}

export default FindPage;