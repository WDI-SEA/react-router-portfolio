import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
                <div>
                    <header>
                        <nav className="navbar is-link is-fixed-top">
                            <div className="navbar-brand">
                            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            </div>

                            <div id="navbarExampleTransparentExample" className="navbar-menu">
                            <div className="navbar-end">
                            <Link className="navbar-item" to="/about">
                                <span className="icon">
                                        <i className="fas fa-info"></i>
                                </span>   
                                
                                
                                <span>About</span>
                            </Link>
                            <Link className="navbar-item" to="/blog">
                                <span className="icon">
                                <i className="fas fa-bars"></i>
                                </span>   
                                
                                
                                <span>Blog</span>
                            </Link>
                            <Link className="navbar-item" to="/resume">
                                <span className="icon">
                                <i className="fas fa-th-list"></i>
                                </span>   
                                
                                
                                <span>Resume</span>
                            </Link>
                            <Link className="navbar-item" to="/projects">
                                <span className="icon">
                                <i className="fas fa-file-alt"></i>
                                </span>   
                                
                                
                                <span>Portfolio</span>
                            </Link>
                            <Link className="navbar-item" to="/contact">
                                <span className="icon">
                                <i className="fas fa-envelope"></i>
                                </span>   
                                
                                
                                <span>Contact</span>
                            </Link>
                            </div>
                            </div>
                        </nav>    
                    </header>
                </div>
        )
    }
}
