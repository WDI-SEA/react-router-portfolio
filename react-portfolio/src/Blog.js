import React from 'react'

const Blog = props => {
  console.log(props.posts)
  let displayPosts = props.posts.map((p, i) => {
    return (
        <div key={i}>
          <h2>Title: {p.title}</h2>
          <p>Content: {p.body}</p>
        </div>
      )
  })

  return (
    <div>
      <h1>MY BLOG!</h1>
      {displayPosts}
    </div>
  )
}

export default Blog
