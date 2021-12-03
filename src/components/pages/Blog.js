import React, { Component } from 'react'

export default class Blog extends Component {
    render () {
        const allPosts = this.props.posts.map((post, i) => {
            return (
                <div>
                <h3>Title: {post.title}</h3>
                <h4>Author: {post.author}</h4>
                <p>{post.body}</p>
                </div>
            )
        })
        return (
            <div>
                <h1>Blog</h1>
                {allPosts}
            </div>
        )
    }
}