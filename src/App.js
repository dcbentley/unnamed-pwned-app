import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Navigation from './Navigation/Navigation';
import FactsBox from './FactsBox';
import SearchBox from './SearchBox';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      domains: [],
      breaches:[],
		};
	}
	// COMMENTED OUT TO PREVENT REACHING API LIMITS DURING BUILD
	componentDidMount() {
	  const URL =
			'https://cors-anywhere.herokuapp.com/https://haveibeenpwned.com/api/v3/breaches';
	  const headers = {
			'Content-Type': 'application/json',
			'hibp-api-key': process.env.REACT_APP_UNNAMED_PWNED_APP_API_KEY,
		};
	  fetch(URL, {
	    method: 'GET',
	    headers: headers,
	  })
    .then(res => res.json())
	  .then(res => {
      this.setState({ breaches: res})
    })
	}

	setCompromisedAccounts = (domains) => {
		this.setState({ domains: domains });
	};

	render() {
    this.state.domains.forEach(items => console.log(items))
    
    

    let compromisedDomains = this.state.domains.map((items) => {
      const filteredCompromisedDomains = this.state.breaches.find((breach) => breach.Name === items.Name);
      console.log(filteredCompromisedDomains)
      return (
				<div className='searchContainer' key={items.Name}>
					{/* <Link to={`/domains/${items.Name}`}>{items.Name}</Link>
					 */}
					<div className='logos'>logo
						<img
							src={filteredCompromisedDomains.LogoPath}
							alt={filteredCompromisedDomains.Name}
						/>
					</div>
					<div><h4>Name:</h4>{filteredCompromisedDomains.Name}</div>
					<div><h4>Date:</h4>{filteredCompromisedDomains.BreachDate}</div>
					<div><h4>Description:</h4>{filteredCompromisedDomains.Description}</div>
					<div><h4>Compromised Data:</h4>{`${filteredCompromisedDomains.DataClasses},`}</div>
				</div>
			);
    });

		return (
			<div>
				<div>
					<Navigation />
					<FactsBox />
					<SearchBox
            setCompromisedAccounts={this.setCompromisedAccounts} 
          />
				</div>
				<div>Search Results: {compromisedDomains}
        </div>
      </div>
		);
	}
}

export default App;

// {/* Catch all for invalid URLS */}
// 					<Route
// 						path='*'
// 						render={() => {
// 							return <Redirect to='/currencies' />;
// 						}}
// 					/>