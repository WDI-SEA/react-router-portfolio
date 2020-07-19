import React from 'react'
import BlogPosts from './BlogPosts'

const Blog = (props) => {
    
    return (
        <div className='post-container'>
            <h1>Blog</h1>
            {props.posts.map(post => (
                <BlogPosts
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    id={post.id}
                    deletePost={() => {props.deletePost(post)}}
                />
            ))}
        </div>
    )
}

export default Blog