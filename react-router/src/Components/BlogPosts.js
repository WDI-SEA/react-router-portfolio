import React from 'react'

const BlogPosts = (props) => {
    return (
        <div className='post-item'>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default BlogPosts