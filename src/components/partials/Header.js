import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    
    render() {
        
        return (
            <header>
                <img className="logo" src="/img/logo.png" alt="YK logo"></img>
                <Link onClick={() => window.location.href="/"} className="myName" to="/">YOUNG<span id="space_SA">SA</span>NG KIM</Link>
                <nav>
                    <Link to="/about">About</Link>{' | '}
                    <Link to="/news">News</Link>{' | '}
                    <Link to="/Works">Works</Link>
                </nav>
            </header>
        )
    }
}

export default Header

// resume link 
// https://drive.google.com/file/d/1ludrrUAsFFopnH-OxWjIMLWrGdu_Vb29/view?usp=sharing
// https://flagguess.herokuapp.com/