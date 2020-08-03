import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<nav class='navbar navbar-expand-lg navbar-light bg-light'>
				<a class='navbar-brand' href='/'>
					Pwned-App
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<li class='nav-item active'>
							<Link classLink='nav-link' to='/'>
								Home
                                <span class='sr-only'>(current)</span>{' '}
							</Link>
						</li>
						<li class='nav-item'>
							<Link classList='nav-link' to='/about'>
								{' '}
								About{' '}
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navigation;
