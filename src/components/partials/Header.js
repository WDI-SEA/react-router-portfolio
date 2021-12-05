import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Header.css'

const Header = () => {
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

export default Header