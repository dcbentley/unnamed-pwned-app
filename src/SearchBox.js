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
	// This handles the form submission to the API primary step 2 of 3
	handleSubmit = (e) => {
		e.preventDefault();
// Add cors-anywhere to API URL and append user email to the URL
		const URL = `https://cors-anywhere.herokuapp.com/https://haveibeenpwned.com/api/v3/breachedaccount/${this.state.email}`;
		//Create headers to send to API
		const headers = {
			'Content-Type': 'application/json',
			'hibp-api-key': process.env.REACT_APP_UNNAMED_PWNED_APP_API_KEY,
		};
		// Fetch URL with GET and send headers
		fetch(URL, {
			method: 'GET',
			headers: headers,
		})
		// If there is no results for that email, if 404 status, we setState on the noResults object in setNoResults 
			.then(res => {
				if (res.status === 404) {
					this.props.setNoResults()
				} else {
					return (res.json())
				}
			})
			// Results are set to setCompromisedAccounts for additional processing
			// The results for this search should only be domains associated with the user email search that were impacted by data breaches
            .then(res => {
			this.props.setCompromisedAccounts(res);
        })
		.catch(err => {
			console.error(err)
		});
	};
	// This handles the form data and setsState of the email object primary step 1 of 3
	handleChange = (e) => {
        this.setState({ email: e.target.value });
	};
// Render search bar and call handleSubmit to process via handleChange what the user enters into the input field.
	render() {
		return (
			<div>
				<div className='row'>
					{/* lets add a column for padding */}
					<div className='col'></div>
					{/* this column is centered thanks to the the empty columns to L & R */}
					<div className='col-5'>
						{/* click handler on submit */}
						<form onSubmit={this.handleSubmit}>
							<input
								placeholder='email address'
								type='email'
								value={this.state.email}
								// on change handler
								onChange={this.handleChange}
							/>
							<input type='submit' value='Search' />
						</form>
					</div>
					{/* lets add a third column for padding */}
					<div className='col'></div>
				</div>
			</div>
		);
	}
}

export default SearchBox;
