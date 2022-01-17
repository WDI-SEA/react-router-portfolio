import React from 'react'

const Blog = (props) => {

  const blogDivs = props.posts.map(post => {
    return <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  })

  return (
    <div>{blogDivs}</div>
  )
}
export default Blog