import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    
        return(
            <header>
                <nav><Link/>
                <Link to="/">Home</Link>{' | '}
                <Link to="/blog">Blog</Link>{' | '}
                <Link to="/about">About</Link>{' | '}
                <Link to="/projects">Projects</Link>{' | '}
                </nav>
            </header>
        )
    
}

export default Header