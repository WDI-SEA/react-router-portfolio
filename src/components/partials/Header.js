import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <Link to='/'>The Beginning</Link>{'     '}
          <Link to='/about'>Who is Patrick Nash?</Link>{'     '}
          <Link to='/blog'>Blog Posts</Link>{'     '}
          <Link to='/projects'>Projects</Link>
        </nav>
      </header>
    )
  }
}

export default Header