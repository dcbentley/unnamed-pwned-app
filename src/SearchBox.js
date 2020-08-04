import React, { Component } from 'react';
// The SearchBox Component creates the initial API call and handles the form submission
class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			noResults: false,
		};
	}
	// 
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
			.then(res => {
				if (res.status === 404) {
					this.props.setNoResults()
				} else {
					return (res.json())
				}
			})
            .then(res => {
			this.props.setCompromisedAccounts(res);
        })
		.catch(err => {
			console.error(err)
		});
	};

	handleChange = (e) => {
        this.setState({ email: e.target.value });
        console.log(e.target.value)
	};

	render() {
		console.log(this.state.email);
		return (
			<div className='container'>
				<div className='row'>
					<div className='col'></div>
					<div className='col-5'>
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
					<div className='col'></div>
				</div>
			</div>
		);
	}
}

export default SearchBox;
