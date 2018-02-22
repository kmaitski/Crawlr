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
 //potentially not 'this' at button onclick
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