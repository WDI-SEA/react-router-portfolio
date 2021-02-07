import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <nav>
            <Link to="/">Go Home!</Link> {' | '}
            <Link to="/about">About me</Link>{' |  '}
            <Link to="/projects">Project</Link>{' |  '}
            <Link to="/Blog">Blog</Link>
          </nav>
        )
    }
}


export default Header