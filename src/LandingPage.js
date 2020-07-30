import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import FactsBox from './FactsBox';
import SearchBox from './SearchBox';

class LandingPage extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<FactsBox />
				<SearchBox />
				<footer>
					<div className='navFooter'>
						<Navigation />
					</div>
				</footer>
			</div>
		);
	}
}

export default LandingPage;
