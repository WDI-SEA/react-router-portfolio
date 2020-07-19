import React, { useState } from 'react';
import NewBlog from './NewBlog';
import blogSeed from './blogSeed';

const Blog = (props) => {

  // new blog title and content updated on change of form
  const [blogs, setBlogs] = useState(blogSeed);
  const [newBlogTitle, setNewBlogTitle] = useState(' ');
  const [newBlogContent, setNewBlogContent] = useState(' ');

  const handleSubmitNewBlog = (e) => {
    // prevent page refresh
    e.preventDefault()
    let newBlog = {
      title: newBlogTitle,
      content: newBlogContent
    }
    setBlogs([newBlog, ...blogs]);
    console.log(newBlog);
  }

  return (
    <div>
      <h1>Blog</h1>
      { 
      blogs.map( (blog, index) => {
        return (
            <div key={`blog-${index}`}>
              <h3 key={`title-${index}`}> { blog.title } </h3>
              <p key={`paragraph-${index}`}> { blog.content } </p>
            </div>
          )
        }) 
      }
      <NewBlog  handleSubmitNewBlog= { handleSubmitNewBlog } 
                setNewBlogContent={ setNewBlogContent }
                setNewBlogTitle={ setNewBlogTitle }
      />
    </div>
  );
};

export default Blog;