import React, { Component } from 'react'
import Navigation from './Navigation'
import FactsBox from './FactsBox'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <FactsBox />
                <SearchBox />
                <SearchResults />
                
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