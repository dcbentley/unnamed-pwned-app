import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Navigation extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                    <Link to='/'>Home </Link>
                    <Link to='/Navigation/About'>About</Link>
                    <Link to='/Navigation/API'>API</Link>
                    <Link to='/Navigation/GitHub'>GitHub</Link>
                    <Link to='/Navigation/Contact'>Contact</Link>
                    <Link to='/Navigation/Donate'>Donate</Link>
                    </nav>
                    <main>
                        <Router exact path='/'/>
                    </main>
                </header>
            </div>
        )
    }
}

export default Navigation;