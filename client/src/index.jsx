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

    
      <Form />
  	</div>
  	)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));