import React, { Component } from 'react'
import resume from '../../pdfs/Bopp_Resume_Draft.pdf'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About Devin</h1>
                <a href={resume} download>Download My Resume</a>
                <br />
                <a href={resume} target="_blank">View Resume in Browser</a>
            </div> 
        )
    }
}
