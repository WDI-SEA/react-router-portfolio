import React, { useState } from 'react';
import AddBlog from './AddBlog';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(blogs)

  return (
    <div className="blog-container">
      <AddBlog />
      <ul className="ul">
      <div className="ul-container">
        {props.contents.map(content =>
        <div className="li-container">
          <li className="blog-list">
            <h1>{content.name}</h1>
            <img className="blog-pic" src={content.image} />
            <p>{content.about}</p>
          </li>
        </div>
        )}
      </div>
      </ul>
    </div>
  )
}

export default Blog;