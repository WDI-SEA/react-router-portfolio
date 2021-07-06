import React from 'react'


export default function Blog(props) {
    const renderedPosts = props.posts.map((post, index) => {
        return (
        <div>
        <h3 key={index}>
            {post.title}
        </h3>
        <p>
            {post.body}
        </p>
        </div>
    )
        
    })
    return (
        <div>
            {renderedPosts}
        </div>
    )
}