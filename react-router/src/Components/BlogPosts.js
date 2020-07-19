import React from 'react'

const BlogPosts = (props) => {
    const handleDeletePost = (e) => {
        e.preventDefault()
        props.deletePost()
    }
    return (
        <div className='post-item'>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.date}</p>
            <button onClick={handleDeletePost}>Delete</button>
        </div>
    )
}

export default BlogPosts