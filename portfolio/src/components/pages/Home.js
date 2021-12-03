import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <main>
                <div className="hero">
                    <h1 className='heroText'>// DEV</h1>
                    <h1 className='heroText'>/// DESIGN</h1>
                </div>
                <div className="ctas">
                    <Link to='/projects'><button>View Projects</button></Link>
                    <Link to='/contact'><button>Hire Me</button></Link>
                </div>
            </main>
        )
    }
}
