import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }
  submitClick() {
    console.log(this.props);
    console.log('hit submitclick in search.jsx');
    this.props.onSubmit(this.state.searchText)
  }

  render() {
    return (
      <div>
        <input
        className="input"
        type = "text"
        value={this.state.searchText}
        onChange={this.handleInputChange}
        placeholder="Enter city... "
        />
        <button onClick={this.submitClick}>
        Search
        </button>
      </div>
    )
  }
}

export default Search;