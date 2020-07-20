import React from 'react'

const Blog = (props) => {
    return (
        <div className='App'>
            <h1>Blog</h1>
            <p>The fuuuuun stufffff
            
            </p>
            <div className='Blog'>
            <p className='posts'>
            {props.posts.map(post => (
                <li key={post}>{post}</li>

))}
            </p>
            </div>
        </div>
    )
}

export default Blog