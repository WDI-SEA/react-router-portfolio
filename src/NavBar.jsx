import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* button for responsive menu */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* conatiner for responsove collapse */}
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          {/* the actual nav */}
          <Nav>
            {/* link container from react-router-bootstrap */}
            <LinkContainer to="/">
              <Nav.Link>
                Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/projects">
              <Nav.Link>
                Projects
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/blog">
              <Nav.Link>
                Blog
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>
                About
              </Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* original nav */}
      {/* 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </nav> 
      */}
    </div>
  );
};

export default NavBar;