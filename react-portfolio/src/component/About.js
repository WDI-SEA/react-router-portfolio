import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About page</h1>
                <Link to="src/files/SoftwareEng.docx" target="_blank" download>My Resume</Link>
            </div>
        )
    }
}
