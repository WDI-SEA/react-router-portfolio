import React, { Component } from 'react'
import Post from '../partials/Post'

export default class Blog extends Component {
    render() {
        let allPosts = this.props.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    date={post.date}
                    title={post.title}
                    body={post.body}
                />
            )
        })

        return (
            <main>
                <div className="title">
                    <h2>Blog</h2>
                </div>
                <div className="hero">
                    {allPosts}
                </div>
            </main>
        )
    }
}