import React, { Component } from 'react'
import { Route, Link, Redirect} from 'react-router-dom';
import App from '../App';
import About from '../Navigation/About'
import SearchBox from '../SearchBox';


class Navigation extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                    <Link to='/'>Home </Link>
                    <Link to='/Navigation/About' component={About}> About </Link>
                 
                    </nav>
                    <main>
                        <Route exact path='/'/>
                        <Route path='/Navigation/:About'/>
                        <Route path='*' render={() => {
                            return <Redirect to='/'/>
                        }}/>
                        
                    </main>
                </header>
            </div>
        )
    }
}

export default Navigation;

// {/* Catch all for invalid URLS */}
// 					<Route
// 						path='*'
// 						render={() => {
// 							return <Redirect to='/currencies' />;
// 						}}
// 					/>