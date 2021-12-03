import React, { Component } from 'react'

export default class BlogPost extends Component {
    render() {
        return (
            <div className="blog-post">
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
            </div>
        )
    }
}
