import React from 'react'

export default function BlogPost(props) {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
    </div>
  )
}
