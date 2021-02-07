import React, { Component } from 'react'

class Project extends Component {
    render() {
        // console.log(this.props)
        if (!this.props.name) return <h3>This is not the project you're looking for...</h3>
        return (
            <section>
                <img src={this.props.img} alt={this.props.name} />
                <h1>{this.props.name}</h1>
                <p>{this.props.longDesc}</p>
            </section>
        )
    }
}

export default Project