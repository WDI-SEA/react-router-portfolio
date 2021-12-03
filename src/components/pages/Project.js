import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div className="project_page">
                <h1>Projects</h1>
                <a className="proj1" href="http://www.harrdev.com" target="_blank"><img src="/telluride.png" class="proj1" height="400px" width="400px"></img></a>
                <p>Telluride is a throwback to Microsoft's Ski Free. Built using HTML canvas, JavaScript, and CSS</p>
            </div>
        )
    }
}