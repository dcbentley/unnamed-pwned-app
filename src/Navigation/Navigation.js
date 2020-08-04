import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Navigation portion of the site
class Navigation extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-light'>
				{/* link to the home page */}
				<a className='navbar-brand' href='/'>
					Pwned-App
				</a>
				{/* lets add some bootstrap to help make pretty and mobile responsive */}
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							{/* link to the home page */}
							<Link to='/'>
								Home
                                <span className='sr-only'>(current)</span>{' '}
							</Link>
						</li>
						<li className='nav-item'>
							{/* link to the about page */}
							<Link to='/about'>
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
