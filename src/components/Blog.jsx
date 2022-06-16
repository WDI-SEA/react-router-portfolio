import React from 'react'

export default function Blog({posts}) {
    const renderPosts = posts.map((post) => {
        return (
        <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
        )
    })
  
    return (
    <>
    <h4>Blog Posts:</h4>
    {renderPosts}
    </>
  )
}
