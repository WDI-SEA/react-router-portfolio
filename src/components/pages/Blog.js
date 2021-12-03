import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        const allPosts = this.props.posts.map((post, i) => {
            return (
                <div>
                    <h3>Title: {post.title}</h3>
                    <small>{post.date}</small>
                    <p>{post.body}</p>
                    <hr />
                </div>
            )
        })
        return (
            <div>
                <h1>This is the blog page</h1>
                {allPosts}
            </div>
        )
    }
}
