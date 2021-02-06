import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return(
            <header className="App-header">
                <nav>
                    <Link to="/">Go to the Home Page</Link>{' | '}
                    <Link to="/about">About!</Link>{' | '}
                    <Link to="/projects">See Our Services</Link>
                </nav>
        </header>
        )
    }
}

export default Header