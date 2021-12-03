import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return(
            <header>
                <nav className='header'>
                    <ul className='nav'>
                        <Link to='/'><li className='links'>Home</li></Link>
                        <Link to='/blog'><li className='links'>Blog</li></Link>
                        <Link to='/about'><li className='links'>About Me</li></Link>
                        <Link to='/projects'><li className='links'>Projects</li></Link>
                    </ul>
                </nav>
            </header>
        )
    }
}