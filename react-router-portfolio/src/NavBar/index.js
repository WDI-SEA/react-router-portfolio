import React, { Component } from 'react'
import { render } from 'react-dom'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'

const Navbar = () => {
        return(
            <>
                <Nav>
                    <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                    About
                    </NavLink>
                    <NavLink to='/blog' activeStyle>
                    Blog
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                    Projects
                    </NavLink>
                    <NavLink to='/' activeStyle>
                    Homepage
                    </NavLink>
                </NavMenu>
                </Nav>
            </>
        );
};

export default Navbar