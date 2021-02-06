import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <img src="" alt="logo will be placed here"></img>
                <h1>YOUNGSANG KIM</h1>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/Works">Works</Link>
                </nav>
            </header>
        )
    }
}

export default Header

// resume link 
// https://drive.google.com/file/d/1ludrrUAsFFopnH-OxWjIMLWrGdu_Vb29/view?usp=sharing