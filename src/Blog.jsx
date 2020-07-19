import React, { useState } from 'react';
import DeleteBlog from './DeleteBlog'
import NewBlog from './NewBlog';
import blogSeed from './blogSeed';

const Blog = (props) => {
  // array of blogs
  const [blogs, setBlogs] = useState(blogSeed);
  // new blog title and content updated on change of form in NewBlog
  const [newBlogTitle, setNewBlogTitle] = useState(' ');
  const [newBlogContent, setNewBlogContent] = useState(' ');

  const handleSubmitNewBlog = (e) => {
    // prevent page refresh
    e.preventDefault();
    // format new blog object
    let newBlog = {
      title: newBlogTitle,
      content: newBlogContent
    }
    // add new blog to blogs array
    setBlogs([newBlog, ...blogs]);
  }

  const handleClickDeleteBlog =  (index) => {
    // splice this blog out of blogs array
    blogs.splice(index, 1);
    // set state with new blog array
    setBlogs([...blogs]);
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
              <DeleteBlog handleClickDeleteBlog={ () => handleClickDeleteBlog(index) }/>
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