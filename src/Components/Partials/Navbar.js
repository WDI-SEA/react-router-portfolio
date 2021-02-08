import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <div className="nav">
        < Link to='/' >Home</Link>
        < Link to='/about' >About</Link>
        < Link to='/blog' >Blog</Link>
        < Link to='/projects' >Projects</Link>
      </div>
    )
  }
}

export default Navbar
