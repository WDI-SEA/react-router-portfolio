import React from 'react'

const Blog = (props) => {
    const allPosts = props.posts.map(post =>{
        return <li>{post.title}
                    <p>{post.body}</p>
        </li>
    }) 
    return (
        <div className="blog">
        <h1>myblogs</h1>
        <h2>{allPosts}</h2>
        </div>
        
    )
}

export default Blog