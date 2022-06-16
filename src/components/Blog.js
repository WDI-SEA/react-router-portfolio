import React from 'react'

export default function Blog(props) {
    const posts = props.posts.map((post, i) => {
        return(
            <>
            <p key={`post-title-${i}`}>{post.title}</p>
            <p key={`post-body-${i}`}>{post.body}</p>
            </>
        )
    })

  return (
    <div className='App'>
        {posts}
    </div>
  )
}
