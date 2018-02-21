import React from 'react';
import ReactDOM from 'react-dom'; 

class Search extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    term: ''
  }
  this.onChange = this.onChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
  	this.setState({term: event.target.value});
  }

  handleSubmit(event) {
    $.post('/search', this.state.term, function (data) {
      console.log("line 18", id)
    })
  }

  render() {
  	return(
  	<div>	
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.onChange} /> 
        <input type="submit" value="Search" />
      </form>
  	</div>
  	)
  }
}

export default Search;

