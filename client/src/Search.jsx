import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
        type = "text"
        value={this.state.searchText}
        onChange={this.handleInputChange}
        />
        <button onClick={this.props.onSubmit}>
        Search
        </button>
      </div>
    )
  }
}

export default Search;