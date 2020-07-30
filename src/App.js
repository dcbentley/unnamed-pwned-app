import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import SearchBox from './SearchBox';

class App extends Component {
  constructor (props) {
    super (props); 
      this.state = {
        placeHolder: null,
        email: ['placeholder'],
    }
}
// COMMENTED OUT TO PREVENT REACHING API LIMITS DURING BUILD
// componentDidMount() {
//   const URL =
//   'https://cors-anywhere.herokuapp.com/https://haveibeenpwned.com/api/v3/breachedaccount/danielcbentley@gmail.com';
//   const headers = {
// 		'Content-Type': 'application/json',
// 		'hibp-api-key': process.env.REACT_APP_UNNAMED_PWNED_APP_API_KEY,
// 	};
//   fetch(URL, {
//     method: 'GET',
//     headers: headers,
//   })
//   .then(res => res.json())
//   .then(console.log)
// }

setAccounts = accountObjects => {
  this.setState({ accountObjects });  
}


  render() {
    console.log();

    return (
      <div>
       <LandingPage />
      </div>
    );
  }
}

export default App;
