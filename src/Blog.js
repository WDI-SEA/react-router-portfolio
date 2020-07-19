import React from 'react'

const Blog = (props) => {
  return (
    <div>
    <h1>Jen's Blog</h1>
      {props.blogPosts.map((post) => {
        return(
          <ul>
            <li>
              {post.title}
              <br />
              {post.content}
            </li>
          </ul>
      )})}
    </div>
  )
}

export default Blog