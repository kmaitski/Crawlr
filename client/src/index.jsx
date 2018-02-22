/*                    index
search    map      crawlentrylist       searchlist
                    crawlentry          searchitem

index has handleSearch -> passed to search
      has handlesearchitemADDclick -> passed to searchlist, then searchitem
      has handlemapmarkerADDclick -> passed to map
        has state that on marker/searchitem click, changes which tells crawlentry to add new item

search has handleinput change

map has api stuffz

searchlist passes handlesearchitemclick to searchitem

crawlentry is generated when info from index state changes by click from searchitem or map
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import MapView from './MapView.jsx';
import CrawlEntryList from './CrawlEntryList.jsx';
import SearchList from './SearchList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barAdded: {},
      searchValue: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchItemAdd = this.handleSearchItemAdd.bind(this);
    this.handleMapMarkerAdd = this.handleMapMarkerAdd.bind(this);
  }
  componentDidMount() {}
  handleSearch () {}
  handleSearchItemAdd() {}
  handleMapMarkerAdd() {}

  render() {
    return (
      <div>
        <h1>Crawlr: A Pub Crawl Creator</h1>
        <h2>First, enter your city of choice!</h2>
        <div>
          <Search onSubmit={this.handleSearch}/>
        </div>
        <div>
          <MapView onMarkerAddClick={this.handleMapMarkerAdd}/>
        </div>
        <div>
          <SearchList onSearchItemAddClick={this.handleSearchItemAdd}/>
        </div>
        <div>
          <CrawlEntryList newBar={this.state.barAdded}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));