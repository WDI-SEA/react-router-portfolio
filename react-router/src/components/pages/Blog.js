import React, { Component } from 'react'
import BlogPost from './BlogPost'

class Blog extends Component {
    render() {
        const allPost = this.props.posts.map((post, i) =>{
        return (
            <div>
                <h1>This is my Blog</h1>
                <h3>Title: {post.title}</h3>
                <h4>Author: {post.author}</h4>
                <p>{post.body}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>My Blog</h1>
            {allPost}
        </div>
    )
}
}

export default Blog
