import React, { useState } from 'react';
import ShowBlog from './ShowBlog';
import NewBlog from './NewBlog';
import blogSeed from './blogSeed';

const Blog = (props) => {
  // array of blogs
  const [blogs, setBlogs] = useState(blogSeed);
  // new blog title and content updated on change of form in NewBlog
  const [newBlogTitle, setNewBlogTitle] = useState(' ');
  const [newBlogContent, setNewBlogContent] = useState(' ');
  // edit blog title and content updated on change of form in showBlog
  const [displayEditForm, setDisplayEditForm] = useState(false); 
  const [editBlogTitle, setEditBlogTitle] = useState(' ');
  const [editBlogContent, setEditBlogContent] = useState(' ');

  // called im NewBlog
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
  // reset edit state
  const changeDisplayEditForm = (index) => {
    // make sure everthing is 'blank'
    setEditBlogTitle(' ');
    setEditBlogContent(' ');
    setDisplayEditForm(index)
  }

  //submit changes to one blog
  const handleSubmitEditBlog = (e, index) => {
    // prevent page refresh
    e.preventDefault();
    // make blog object
    let editBlog = {
      title: editBlogTitle,
      content: editBlogContent
    }
    // splice edited blog into blogs at index
    blogs.splice(index, 1, editBlog);
    // set state
    setBlogs([...blogs]);
    // stop showing edit form
    setDisplayEditForm(false)
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
          return( <ShowBlog blog= { blog } 
                            index={ index }
                            handleClickDeleteBlog= { handleClickDeleteBlog }
                            handleSubmitEditBlog={ handleSubmitEditBlog }
                            displayEditForm={ displayEditForm }
                            changeDisplayEditForm={ changeDisplayEditForm }
                            setEditBlogTitle={ setEditBlogTitle }
                            setEditBlogContent={ setEditBlogContent }
                  />
          )
        })
      }
      <h3>Submit New Blog:</h3>
      <NewBlog  handleSubmitNewBlog= { handleSubmitNewBlog } 
                setNewBlogContent={ setNewBlogContent }
                setNewBlogTitle={ setNewBlogTitle }
      />
    </div>
  );
};

export default Blog;