import React, { Component } from 'react';
// This is the super basic about section
class About extends Component {
	render() {
		return (
			<div>
				{/* added to css for some simple reuseable styling */}
				<main className='aboutContainer'>
					<div className='kofi'>
						If you think this is nifty, you can help fund projects like it. Buy
						be a cup of coffee via{' '}
						<a href='https://ko-fi.com/dcbentley'>Ko-Fi</a>.
					</div>
					<div className='causes'>
						Here are a few other causes that I support:
						<div>
							<a href='https://blacklivesmatters.carrd.co/'>
								Black Lives Matter
							</a>
						</div>
						<div>
							<a href='https://www.eff.org/'>Electronic Frontier Foundation</a>
						</div>
					</div>
				</main>
				<footer className='footer'>
					<div className='container'>
						<span className='text-muted'>
							<a href='https://www.linkedin.com/in/danielcbentley/'>LinkedIn</a>
						</span>
						<span className='text-muted'>
							<a href='https://github.com/dcbentley/trivia-night'> GitHub</a>
						</span>
						<div className='text-muted'>
							<span className='madeWithLove'>
								Made with &hearts; by Daniel Bentley
							</span>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
export default About;
