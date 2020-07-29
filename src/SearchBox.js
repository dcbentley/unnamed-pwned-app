import React, { Component } from 'react'

class SearchBox extends Component {

    render() {
        return (
            <div>
                <form>
                    <input placeholder='email address' type='text' name='email'/>
                    <input type='submit' value='Submit' text='Search'/>
                </form>
            </div>
        )
    }
}

export default SearchBox;