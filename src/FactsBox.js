import React, { Component } from 'react'
// This is the factBox that contains one static fact and directions
// Maybe in the future this could contain a carousel with rotating info
class FactsBox extends Component {
    render() {
        return (
            <div className='factBox'>
                <h3>Passwords are like underwear... you should change them often</h3>
                <p>Enter your email address to search for compromised services associated with it</p>
            </div>
        )
    }
}

export default FactsBox;