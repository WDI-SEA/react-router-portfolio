export default function BlogForm(props) {
  const handleChange = (e) => {
      // create an id for the new blog; needs to be a number not used by the posts arr or any other blogs in state
      const idx = props.posts.length + props.blogs.length + 1
      props.setNewBlog({
          ...props.newBlog, 
          [e.target.name]: e.target.value,
          id: idx
      })
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      props.setBlogs([props.newBlog,...props.blogs])
      props.setNewBlog({id:"", title: "", description: ""})
  }
  return(
  <>
      <h2>Add a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
          <label htmlFor="post-title">Title: </label>
          <input 
              name="title" 
              id="post-title" 
              type="text"
              value={props.newBlog.title}
              onChange={handleChange}
          />
          <label htmlFor="post-description">Description: </label>
          <input 
              name="description" 
              id="post-description" 
              type="text"
              value={props.newBlog.description}
              onChange={handleChange}
          />
          <input type="submit"/>
      </form>
  </>
  )
}