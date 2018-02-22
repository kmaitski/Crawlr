import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);

  }
  render() {
  	return (
    <div>
    <h1>Crawlr: A Pub Crawl Creator</h1>
    <h2>First, enter your city of choice!</h2>
  	<div>


      <Form />
  	</div>
    </div>
  	)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));