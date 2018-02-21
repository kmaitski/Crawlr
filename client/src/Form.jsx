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
      url: "https://www.google.com/maps/embed/v1/search?key=AIzaSyD8_cjmGOuOCn5Zg_anj26EdMz6whGu82I&q=bars+near+Austin+Tx",
  	  location: '',
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
    let newUrl = `https://www.google.com/maps/embed/v1/directions?origin=${this.state.bar1}&destination=${this.state.bar2}&key=AIzaSyD8_cjmGOuOCn5Zg_anj26EdMz6whGu82I`
    this.setState({
      url: newUrl
    })

  }

  onFormChange(event) {
    this.setState({term: event.target.value});
  }

  handleSearchSubmit(event) {
    this.setState({location: event.target.value});
  }

  render() {
    console.log(this.state)
  	return (
    <div>
    <div> 
      <form onSubmit={this.handleSearchSubmit}>
        <input type="text" onFormChange={this.onFormChange} /> 
        <input type="submit" value="Search" />
      </form>
    </div>
    <iframe
     style={mapStyle}
      src={this.state.url} allowFullScreen>
    </iframe>
    <form>
      <input name="city" onChange={this.formChange} type="text" /> 
      <input name="bar1" onChange={this.formChange} type="text" /> 
      <input name="bar2" onChange={this.formChange} type="text" /> 
      <input name="bar3" onChange={this.formChange} type="text" /> 
      <input name="bar4" onChange={this.formChange} type="text" /> 
      <input type="submit" value="Submit" onClick={this.handleFormClick} />
    </form>
    </div>
  	)
  }
}

  

  

export default Form;