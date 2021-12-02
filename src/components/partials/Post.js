import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return(
            <>
                <h1>{this.props.eachPost.title}</h1>
                <p>{this.props.eachPost.body}</p>
            </>
        )
    }
}