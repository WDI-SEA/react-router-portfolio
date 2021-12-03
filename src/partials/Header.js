import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div class="container">
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
}