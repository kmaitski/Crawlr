import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'semantic-ui-react';
import FindCrawlList from './FindCrawlList.jsx';

class FindPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      entryView: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitClick = this.submitClick.bind(this);
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
        {this.state.entryView && <FindCrawlList crawlList={this.props.crawls}/>}
      </div>
    )
  }
}

export default FindPage;