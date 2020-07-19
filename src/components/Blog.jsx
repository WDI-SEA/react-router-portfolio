import React from 'react'

const Blog = (props) => {
    return (
        <div>
            <h1>These are my blog posts</h1>
            {props.posts.map((post, idx) => {
                return (
                    <div>
                        <h2 key={idx}>{post.title}</h2>
                        <p key={idx}>{post.date}</p>
                        <h4 key={idx}>{post.content}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog