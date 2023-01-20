import { useState, useEffect } from 'react'

function Blog(props) {

    const postsArray = props.post.map((post,idx) => {
        return(
            <div key={`post-${idx}`} className='post'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
    })
    return ( 
        <div className='container'>
            <h1>Blog Posts</h1>
            
            {postsArray}
        </div>
    );
}

export default Blog;