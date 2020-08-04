import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import Navigation from './Navigation/Navigation';
import FactsBox from './FactsBox';
import SearchBox from './SearchBox';
import About from './Navigation/About';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			domains: [],
			breaches: [],
			noResults: false,
		};
	}
	// Primary step 3 of 3
	// Here we make one last call to the API to get all breach data
	componentDidMount() {
		// Add cors-anywhere to API URL and request all breaches
		const URL =
			'https://cors-anywhere.herokuapp.com/https://haveibeenpwned.com/api/v3/breaches';
		const headers = {
			'Content-Type': 'application/json',
			'hibp-api-key': process.env.REACT_APP_UNNAMED_PWNED_APP_API_KEY,
		};
		// Fetch URL with GET and send headers
		fetch(URL, {
			method: 'GET',
			headers: headers,
		})
			// setState for breaches object
			.then((res) => res.json())
			.then((res) => {
				this.setState({ breaches: res });
			});
	}
	// results we originally received from SearchBox.js
	// these are needed so we can filter all breaches to just cases that impact the specific email address
	setCompromisedAccounts = (domains) => {
		this.setState({ domains: domains });
	};
	// here we have to do a little cleanup on the description string from the API since it contains HTML inside our string
	createMarkup = (html) => {
		return { __html: html };
	};
// Here we check to see if domains has any length, if it does, then noResults is true and we want to proceed to the MagicSauce area. If there is no length, then the email was not found in the database and we want to exit out and jump down to the return holding all the components and tell the user we couldn't find any breaches
	setNoResults = () => {
		if (this.state.domains.length === 0) {
			this.setState({ noResults: true });
		} else {
			this.setState({ noResults: false });
		}
	};
	// This is where the MagicSauce and wild things happen
	render() {
		// declare var for compromisedDomains
		let compromisedDomains;
		// Start logic to map and find only domains impact the searched email
		// Here we are going to map over all domains that matched from our email search and then look at breaches and find only domains that match. This will then be stored to filteredCompromisedDomains
		if (this.state.domains) {
			compromisedDomains = this.state.domains.map((items) => {
				const filteredCompromisedDomains = this.state.breaches.find(
					(breach) => breach.Name === items.Name
				);
// Here we are going to start returning our filteredCompromisedDomains
				return (
					<div className='row' key={items.Name}>
						<div className='col-6 col-md-4 searchImg'>
							<img
								src={filteredCompromisedDomains.LogoPath}
								alt={filteredCompromisedDomains.Name}
							/>
						</div>

						<div className='col-12 col-md-8'>
							<div className='container-text'>
								<h4>Name:</h4>
								{filteredCompromisedDomains.Name}
								<h4>Date:</h4>
								{filteredCompromisedDomains.BreachDate}
{/* because there was HTML in the string for the description, we must use dangerouslySetInnerHTML. This is a cheap way we can process this. A safer way that can mitigate XSS would be to have a separate links field in the database, or spend a lot of time and effort processing out the HTML in another 2 functions */}
								<h4>Description:</h4>
								<p
									dangerouslySetInnerHTML={this.createMarkup(
										filteredCompromisedDomains.Description
									)}
								/>
								{/* here we use a join because the different classes of breaches are strings in an array */}
								<h4>Compromised Data:</h4>
								{filteredCompromisedDomains.DataClasses.join(', ')}
							</div>
						</div>
					</div>
				);
			});
		} else {
			// Empty string for when compromised domains aren't found
			compromisedDomains = '';
		}

		return (
			<div>
				<Navigation />
				<Route path='/' exact>
					<FactsBox />
					<SearchBox
						setCompromisedAccounts={this.setCompromisedAccounts}
						setNoResults={this.setNoResults}
					/>
					<div className='searchResults'>{compromisedDomains}</div>
					{this.state.domains === undefined && (
						<p>Congrats! No Compromised accounts!</p>
					)}
				</Route>
				<Route path='/about' component={About} />

				<Route path='/:email' />

				<Route
					path='*'
					render={() => {
						return <Redirect to='/' />;
					}}
				/>
			</div>
		);
	}
}

export default App;
