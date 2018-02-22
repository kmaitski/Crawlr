import React from 'react';
import ReactDOM from 'react-dom';
const mapStyle = {
  width: '600px',
  height: '450px',
  frameBorder:'0', style:'border:0'
}
class Form extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      url: "https://www.google.com/maps/embed/v1/search?zoom=13&key=AIzaSyD8_cjmGOuOCn5Zg_anj26EdMz6whGu82I&q=bars+near+Austin+Tx",
  	  city: '',
  	  bar1: '',
  	  bar2: '',
  	  bar3: '',
  	  bar4: ''
  	}
  	this.formChange = this.formChange.bind(this);
  	this.handleFormClick = this.handleFormClick.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }


  formChange(event) {
    let stateObject = function() {
      let returnObj = {};
      returnObj[event.target.name] = event.target.value;
      return returnObj;
    }.bind(event)();

   this.setState( stateObject );

  }

  handleFormClick(event) {
    event.preventDefault();
    let newUrl = `https://www.google.com/maps/embed/v1/directions?origin=${this.state.bar1}+${this.state.city}&waypoints=${this.state.bar2}+${this.state.city}|${this.state.bar3}+${this.state.city}&mode=walking&destination=${this.state.bar4}+${this.state.city}&key=AIzaSyD8_cjmGOuOCn5Zg_anj26EdMz6whGu82I`
    this.setState({
      url: newUrl
    })
  }

  onFormChange(event) {
    this.setState({term: event.target.value});
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    let newUrl = `https://www.google.com/maps/embed/v1/search?key=AIzaSyD8_cjmGOuOCn5Zg_anj26EdMz6whGu82I&q=bars+near+${this.state.city}`
    this.setState({
      url: newUrl
    })
  }

  render() {
    console.log(this.state)
  	return (
    <div>
    <div>
      <form onSubmit={this.handleSearchSubmit}>
        <input type="text" name="city" onChange={this.formChange} placeholder="Enter city here..." />
        <input type="submit" value="Search" />
      </form>
    </div>
    <iframe
     style={mapStyle}
      src={this.state.url} allowFullScreen>
    </iframe>
    <form>
      <h4>Enter four destinations in the order you'd like to crawl!</h4>
      <input name="bar1" onChange={this.formChange} type="text" placeholder="Starting Bar"/>
      <input name="bar2" onChange={this.formChange} type="text" placeholder="Second Bar"/>
      <input name="bar3" onChange={this.formChange} type="text" placeholder="Third Bar"/>
      <input name="bar4" onChange={this.formChange} type="text" placeholder="Final Bar"/>
      <input type="submit" value="Submit" onClick={this.handleFormClick} />
    </form>
    </div>
  	)
  }
}





export default Form;