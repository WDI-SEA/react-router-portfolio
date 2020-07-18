import React from 'react'
import BlogPosts from './BlogPosts'

const Blog = (props) => {
    
    return (
        <div className='post-container'>
            {props.posts.map(post => (
                <BlogPosts
                    title={post.title}
                    content={post.content}
                    date={post.date}
                />
            ))}
        </div>
    )
}

export default Blog