import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <h1 className="title article-title">OSU Clone</h1>  
                <iframe src="https://giphy.com/embed/8P3aLSJtcJJfwNv1Iz" width="479" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

                <p>Solo Project build over the course of 7 days: an interactive game to train mouse accuracy and relax the end-user.
Built using Javascript Canvas, HTML and CSS. Includes interactive sound, particle effects and hitboxes that expand and contract.
                </p>
            </div>
        )
    }
}

