import React from 'react'

const Blog = props => {
    let blogPosts = props.posts.map( (post, i) => {
        return <div key={i}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
    })

    return (
        <div>
            {blogPosts}
        </div>
    )
}

export default Blog