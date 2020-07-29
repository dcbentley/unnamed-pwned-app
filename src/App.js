import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super (); 
      this.state = {
        placeHolder: null,
    }
}
componentDidMount() {
  const URL =
  'https://cors-anywhere.herokuapp.com/https://haveibeenpwned.com/api/v3/breachedaccount/danielcbentley@gmail.com';
  const headers = {
		'Content-Type': 'application/json',
		'hibp-api-key': process.env.REACT_APP_UNNAMED_PWNED_APP_API_KEY,
	};
  fetch(URL, {
    method: 'GET',
    headers: headers,
  })
  .then(res => res.json())
  .then(console.log)
}


  render() {
    console.log();

    return (
      <div>
        <header>
          <nav>
            Nav goes here
          </nav>
        </header>
  
  
      </div>
    );
  }
}

export default App;
