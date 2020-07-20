import React from 'react';

const Blog = (props) => {
  return (
    <div className="blog-container">
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