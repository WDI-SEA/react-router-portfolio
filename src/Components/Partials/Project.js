import React, { Component } from 'react';

class Project extends Component {
    render() {
        console.log(this.props)
        console.log(this.props.image)
        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.image}/>
            </div>
        )
    }
}

export default Project;