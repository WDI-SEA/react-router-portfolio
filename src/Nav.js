import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/projects">Projects</Link> | 
            <Link to="/blog">Blog</Link>
            <style jsx>
                {`
                    nav {
                        width: 300px;
                        margin: auto;
                        display: flex;
                        justify-content: space-evenly;
                    }
                `}
            </style>
        </nav>
    )
}

export default Nav;