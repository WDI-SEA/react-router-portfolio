import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About page</h1>
                <Link to='/resume.pdf' target='_blank' download>
                    <Button type="button">
                        Download resume
                    </Button>
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