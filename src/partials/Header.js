import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = props => {

        return (
            <div class="container" id="navBar">
            <header>
                <Nav>

                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>

                </Nav>
            </header>
            </div>
        )
}

export default Header