import React, { Component } from "react"

export default class Project extends Component {
    render() {
        return (
            <div className="projectCard">
                <div className="title">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="visual">
                    <img src={this.props.image} alt="Project screenshot" />
                </div>
                <div className="description">
                    <h4>{this.props.stack}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}