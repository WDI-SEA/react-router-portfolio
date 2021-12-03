import Button from '@restart/ui/esm/Button'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return(
            <div>
                <h1>About page</h1>
                <Link to='/resume.pdf' target='_blank' download>
                    <button type="button">
                        Download resume 
                    </button>
                    
                </Link>
                <h2>Skills </h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>PostgreSQL</li>
                    <li>React</li>
                </ul>
            </div>
        )
    }
}