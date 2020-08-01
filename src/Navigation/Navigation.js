import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Navigation extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                    <Link to='/'>Home </Link>
                    <Link to='/about'> About </Link>
                 
                    </nav>
                    
                </header>
            </div>
        )
    }
}

export default Navigation;
