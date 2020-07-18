import React from 'react'

function Blog(props) {

    return (
        <div>
            <h2 className="header">Read all my mind blowing blogs here to know all their is to know inside my mind.</h2>
            <ul>
                {props.posts.map((post, i) => <li key={i}><h3>{post.title}</h3> <blockquote>{post.body}</blockquote></li>)}
            </ul>
        </div>
    )
}

export default Blog;