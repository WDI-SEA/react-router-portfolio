import React, { Component } from 'react'
import BlogPost from './BlogPost'

class Blog extends Component {
    render() {
        const allPost = this.props.posts.map((post, i) =>{
        return (
            <div className='myContainer'>
                <h1>This is my Blog</h1>
                <h3>Title: {post.title}</h3>
                <h4>Author: {post.author}</h4>
                <p>{post.body}</p>
            </div>
        )
    })
    return (
        <div>
            {allPost}
        </div>
    )
}
}

export default Blog
