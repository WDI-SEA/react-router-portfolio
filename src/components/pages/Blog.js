import React, { Component } from 'react'
import BlogPost from './BlogPost'

export default class Blog extends Component {
    render() {
        const allPosts = this.props.posts.map(post => {
                return <BlogPost post={post} />
        })
        return (
            <div>
                <h1>Blog</h1>
                {allPosts}
            </div>
        )
    }
}
