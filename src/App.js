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
			.then((res) => res.json())
			.then((res) => {
				this.setState({ breaches: res });
			});
	}

	setCompromisedAccounts = (domains) => {
		this.setState({ domains: domains });
	};

	createMarkup = (html) => {
		return { __html: html };
	};

	render() {
		this.state.domains.forEach((items) => console.log(items));

		let compromisedDomains = this.state.domains.map((items) => {
			const filteredCompromisedDomains = this.state.breaches.find(
				(breach) => breach.Name === items.Name
			);
			console.log(filteredCompromisedDomains);
			return (
				<div class='row' key={items.Name}>
					<div class='col-6 col-md-4 searchImg'>
						<img
							src={filteredCompromisedDomains.LogoPath}
							alt={filteredCompromisedDomains.Name}
						/>
					</div>

					<div class='col-12 col-md-8'>
						<div className='container-text'>
							<h4>Name:</h4>
							{filteredCompromisedDomains.Name}
							<h4>Date:</h4>
							{filteredCompromisedDomains.BreachDate}
							<h4>Description:</h4>
							<p
								dangerouslySetInnerHTML={this.createMarkup(
									filteredCompromisedDomains.Description
								)}
							/>
							<h4>Compromised Data:</h4>
							{filteredCompromisedDomains.DataClasses.join(', ')}
						</div>
					</div>
				</div>
			);
		});

		return (
			<div>
				<Navigation />
				<Route path='/' exact>
					<FactsBox />
					<SearchBox setCompromisedAccounts={this.setCompromisedAccounts} />
					<div>Search Results: {compromisedDomains}</div>
				</Route>
				<Route path='/about' component={About} />
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
