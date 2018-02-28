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
import MapContainer from './MapContainer.jsx';
import DirectionsMap from './DirectionsMap.jsx';
import $ from 'jquery';
import { Grid, Menu } from 'semantic-ui-react';

// let intialBars =

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      barAdded: [],
      searchValue: '',
      barList: [],
      location: {lat: 30.2672, lng: -97.7431},
      activeItem: 'home'
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBarAdd = this.handleBarAdd.bind(this);
    this.handleBarRemove = this.handleBarRemove.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleSearch (searchText) {
    console.log('hit handlesearch in index.jsx, searchtext is:', searchText);
    //set searchvalue state to search
    this.setState({searchValue: searchText});
    //do post request to server with search value
    let location = {location: searchText}
    $.post('/Search', location, (data) => {

      this.setState({
        barList: data.barList,
        location: data.coor
      });
    });
  }
  handleSearchItemAdd() {}
  handleBarAdd(bar) {
    var newBarList = this.state.barAdded;
    newBarList.push(bar);
    this.setState({
      barAdded: newBarList
    })
  }
  handleBarRemove(e) {
    var newBarList = this.state.barAdded;
    newBarList.splice(e.target.name, 1)
    this.setState({
      barAdded: newBarList
    })
  }
  handleMenuClick(e, { name }) {
    console.log('hit menu click e is', name)
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state.activeItem
    return (
      <div>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <h1>Crawlr: A Pub Crawl Creator</h1>
          </Grid.Column>
          <Grid.Column width={12}>
          </Grid.Column>
          <Grid.Column width={1}>
            <h5>Login</h5>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          <Menu>
            <Menu.Item
              name='home'
              active={this.state.activeItem === 'home'}
              onClick={this.handleMenuClick}
            >
            Home
            </Menu.Item>
            <Menu.Item
              name='find'
              active={this.state.activeItem === 'find'}
              onClick={this.handleMenuClick}
            >
            Find a Crawl
            </Menu.Item>
            <Menu.Item
              name='create'
              active={this.state.activeItem === 'create'}
              onClick={this.handleMenuClick}
            >
            Create a Crawl
            </Menu.Item>
          </Menu>
          </Grid.Column>
        </Grid.Row>
        {this.state.activeItem === 'create' &&
        <Grid celled>
        <Grid.Row>
          <Grid.Column width={5}>
          <h3>First, enter your city of choice!</h3>
          <Search onSubmit={this.handleSearch}/>
          </Grid.Column>
          <Grid.Column width={7}>

        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={11}>
          <MapContainer addbar={this.handleBarAdd} barlist={this.state.barList} location={this.state.location} />
        </Grid.Column>
        <Grid.Column width={5}>
        <h1>Your Crawl</h1>
        {this.state.barAdded.length === 0 &&
          <div>
            <h3>Double click marker to add bar</h3>
          </div>
        }
        {this.state.barAdded.length > 0 &&
          <CrawlEntryList removebar={this.handleBarRemove} barAdded={this.state.barAdded} />
        }
        </Grid.Column>
        </Grid.Row>
        </Grid>
      }
        {this.state.barAdded.length >= 3 &&
          <div>
            <h1>Here is your route!</h1>
            <h4>Click 'more options' for details</h4>
            <DirectionsMap crawlBars={this.state.barAdded} />
          </div>
        }
      </Grid>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));