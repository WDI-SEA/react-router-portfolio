import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
          <header className='myContainer'>
              <nav>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Me</Link></li>
                      <li><Link to="/blog">My Blog</Link></li>
                      <li><Link to="/projects">My Projects</Link></li>
                  </ul>
              </nav>
          </header>
        )
    }
}

export default Header