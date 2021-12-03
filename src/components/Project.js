import React, { Component } from "react"
import { Heading  } from "react-bulma-components";

export default class Project extends Component {
    render (){
        return (
            <div className="blogContainer">
                <div>
                    <img src={this.props.project.imgUrl} alt="project image" />
                <Heading>{this.props.project.name}</Heading>
                <Heading subtitle>{this.props.project.techStack}</Heading>
                </div>
                <br/>
                <p>{this.props.project.description}</p>
            </div>
        )
    }

}

