import React from 'react'
import BlogPost from '../components/BlogPost'

export default function Blog(props) {
  let posts = props.posts.map(post => <BlogPost post={post} />)

  return (
    <div>
      <h1>I have OPINIONS!</h1>
      {posts}
    </div>
  )
}
