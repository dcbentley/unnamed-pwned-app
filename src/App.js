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

	setNoResults = () => {
		if (this.state.domains.length === 0){
			this.setState({ noResults: true})
		} else {
			this.setState({ noResults: false });
		}
	}
	
	render() {
		// if (this.state.noResults === true) {
		// 	return <p>Congrats! No Compromised accounts!</p>
		// }
		// this.state.domains.forEach((items) => console.log(items));
let compromisedDomains;
		if (this.state.domains) {
			compromisedDomains = this.state.domains.map((items) => {
				const filteredCompromisedDomains = this.state.breaches.find(
					(breach) => breach.Name === items.Name
				);
				// console.log(filteredCompromisedDomains);
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
						{/* {this.state.noResults === true && (
						<p>Congrats! No Compromised accounts!</p>
					)} */}
					</div>
				);
			});
		} else {
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
					<div>{compromisedDomains}</div>
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
