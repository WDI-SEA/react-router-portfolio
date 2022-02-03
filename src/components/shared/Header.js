import React from 'react'
import {Link} from 'react-router-dom'
import Resume from './Resume-MikeKohlberg.pdf'

const Header = () => {
  return (
    <header>
      <a href={Resume} download>Resume Download</a>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header