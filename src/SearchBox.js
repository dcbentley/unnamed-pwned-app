import React, { Component } from 'react';

class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const URL = `https://cors-anywhere.herokuapp.com/https://haveibeenpwned.com/api/v3/breachedaccount/${this.state.email}`;
		const headers = {
			'Content-Type': 'application/json',
			'hibp-api-key': process.env.REACT_APP_UNNAMED_PWNED_APP_API_KEY,
		};
		fetch(URL, {
			method: 'GET',
			headers: headers,
		})
            .then((res) => res.json())
            .then(res => {
            console.log(res);
            this.props.setCompromisedAccounts(res);

        });

        console.log(this.state.email);

	};

	handleChange = (e) => {
        this.setState({ email: e.target.value });
        console.log(e.target.value)
	};

	render() {
		console.log(this.state.email);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder='email address'
						type='email'
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input type='submit' value='Search' />
				</form>
			</div>
		);
	}
}

export default SearchBox;
