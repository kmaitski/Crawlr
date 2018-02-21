import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  location: '',
  	  bar1: '',
  	  bar2: '',
  	  bar3: '',
  	  bar4: ''
  	}
  	this.change = this.change.bind(this);
  	this.handleClick = this.handleClick.bind(this);
  }

  change(event) {
  	let property = event.target.name;
    this.setState({
      property: event.target.value
    })
  }

  handleClick(event) {
    $.post('/crawls',this.state, function() {
      console.log('best crawl ever line 26');
    })
  }

  render() {
  	return (
    <form>
      <input name="city" onChange={this.change} type="text" /> 
      <input name="bar1" onChange={this.change} type="text" /> 
      <input name="bar2" onChange={this.change} type="text" /> 
      <input name="bar3" onChange={this.change} type="text" /> 
      <input name="bar4" onChange={this.change} type="text" /> 
      <input type="submit" value="Submit" onClick={this.handleClick} />
    </form>
  	)
  }
}

export default Form;