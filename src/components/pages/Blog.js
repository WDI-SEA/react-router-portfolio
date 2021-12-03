import React, { Component } from 'react'

export default class Blog extends Component {
    render () {
        const allPosts = this.props.posts.map((post, i) => {
            return (
                <div>
                <h3>{post.title}</h3>
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