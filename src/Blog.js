import React from 'react';

const Blog = (props) => {
  return (
    <div className="blog-container">
      <div className="ul-container">
        <ul>
          {props.contents.map(content =>
          <div className="li-container">
            <li className="blog-list">
              <h1>{content.name}</h1>
              <p>{content.about}</p>
            </li>
          </div>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Blog;