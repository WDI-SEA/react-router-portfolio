import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className='navContainer'>
                   <div className='navDiv'><Link to='/'>Home</Link></div>
                   <div className='navDiv'><Link to='/about'>About</Link></div>
                   <div className='navDiv'><Link to='/blog'>Blog</Link></div>
                   <div className='navDiv'><Link to='/projects'>Projects</Link></div>
                </nav>
            </header>
        )
    }
}
