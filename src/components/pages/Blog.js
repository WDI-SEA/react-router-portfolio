import React from 'react';

class Blog extends React.Component {
  render () {
    let blogPosts = this.props.blog.map((blog, i) =>(
      <div className={`blogPost_container`} key={`blogpost-${i}`}>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
      </div>
    ))
    return (
      <div className='main_blog_container'>
        <h1> Blog</h1>
        {blogPosts}
      </div>
    )
  }
};

export default Blog;