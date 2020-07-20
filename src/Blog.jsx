import React from 'react';
import Post from './Post';

function Blog(props) {
  const posts = props.posts.map( (post, index) => {
    return (
      <div key={index}>
        <Post
          title={post.title}
          body={post.body}
        />
      </div>
    )
  })

  return (
    <div>
      <h3>
        Blog!
      </h3>
      <div>
        {posts}
      </div>
    </div>
  )
}

export default Blog