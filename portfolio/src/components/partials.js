import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            
            <nav>
            <li>{' |  '}<Link to="/about">About me</Link>{' |  '}</li>
            <li>{' |  '}<Link to="/projects">Project</Link>{' |  '}</li>
            <li>{' |    '}<Link to="/Blog">Blog</Link>{'   | '}</li>
            <li >{' | '}<Link to="/">Home</Link> {'|'}</li>
          </nav>
          
        )
    }
}


export default Header