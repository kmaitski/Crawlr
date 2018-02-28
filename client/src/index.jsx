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
import LoginView from "./LoginView.jsx"
import SignupView from "./SignupView.jsx"
import $ from 'jquery';
import { Grid, Menu } from 'semantic-ui-react';
import LandingPage from './LandingPage.jsx';

// let intialBars =

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      barAdded: [],
      searchValue: '',
      barList: [],
      location: {lat: 30.2672, lng: -97.7431},
      activeItem: 'home',
      landingPageView: true,
      crawlListView: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBarAdd = this.handleBarAdd.bind(this);
    this.handleBarRemove = this.handleBarRemove.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleUserCreation = this.handleUserCreation.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
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
        location: data.coor,
        landingPageView: false
      });
    });
  }
  handleSearchItemAdd() {}
  handleBarAdd(bar) {
    var newBarList = this.state.barAdded;
    newBarList.push(bar);
    this.setState({
      barAdded: newBarList,
      crawlListView: true
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
  handleUserCreation(e) {
    e.preventDefault();
    const username = $(".username").val();
    const password = $(".password").val();
    console.log('user ' + username + ' created')
    this.setState({
      activeItem: 'home'
    })
  }

  handleAuth(e) {
    e.preventDefault();
    const username = $(".username").val();
    const password = $(".password").val();
    console.log('Welcome, ' + username)
    this.setState({
      activeItem: 'home'
    })
  }

  render() {
    const { activeItem } = this.state.activeItem
    return (
      <div>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
            <h1>Crawlr</h1>
            <h3>A Pub Crawl Creator</h3>
          </Grid.Column>
          <Grid.Column width={9}>
          </Grid.Column>
          <Grid.Column width={3}>
            <Menu>
              <Menu.Item
              width = {2}
              name='login'
              active={this.state.activeItem === 'login'}
              onClick={this.handleMenuClick}
              >
              Log In
              </Menu.Item>
              <Menu.Item
              name='signup'
              active={this.state.activeItem === 'signup'}
              onClick={this.handleMenuClick}
              >
              Sign Up
              </Menu.Item>
            </Menu>
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
        {this.state.activeItem == 'login' &&
        <LoginView submit={this.handleAuth} />
        }
        {this.state.activeItem == 'signup' &&
        <SignupView submit={this.handleUserCreation} />
        }
        {this.state.activeItem === 'create' &&
        <Grid celled>
        <Grid.Row>
          <Grid.Column width={7}>
          <h3>First, enter your city of choice!</h3>
          <Search onSubmit={this.handleSearch}/>
          </Grid.Column>
          <Grid.Column width={5}>

        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={11}>
          {this.state.landingPageView ? <LandingPage /> : <MapContainer addbar={this.handleBarAdd} barlist={this.state.barList} location={this.state.location} />}
        </Grid.Column>
        <Grid.Column width={5}>
          {!this.state.landingPageView && !this.state.crawlListView && <div><h4>Then double click on the marker to start adding bars to your crawl!</h4></div>}
          {this.state.crawlListView && <CrawlEntryList removebar={this.handleBarRemove} barAdded={this.state.barAdded} />}
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