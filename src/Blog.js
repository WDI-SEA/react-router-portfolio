import React from 'react'

const Blog = props => {
    let allPosts = props.posts.map((post, i) => {
        return (
            <div key={i}>
                <h3> {post.title} </h3>
                <p> {post.body} </p>
            </div>
        )
    })

    return (
        <div className="blogpage">
            <h1> My thoughts: </h1>
            {allPosts}
        </div>
    )
}

export default Blog;