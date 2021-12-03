import React, { Component } from 'react'

class Post extends Component {
    render () {
        return (
            <div className="post">
            <h3 id="postTitle">{this.props.p.title}</h3>
            <p id="postText">{this.props.p.post}</p>
            </div>
            
        )
    }
}

export default Post