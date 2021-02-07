import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Blog extends Component {
    render() {
        let blogPosts = this.props.blogPosts.map((post, i) => (
            <li key={`post-${i}`}>
            <Link to={`/blog/${post.id}`}>{post.shortDesc}</Link></li>
        ))
        return (
            <section>
                <h1>Hal Apenyo Blog</h1>
                <ul>
                    {blogPosts}
                </ul>
            </section>
        )
    }
}

export default Blog