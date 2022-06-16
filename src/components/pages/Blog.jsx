const Blog = (props) => {
  const blogs = props.BlogData.map((blog, i) => {
    return (
      <div key={`${blog.title}-${i}`}>
        <h3>{blog.title}</h3>
        
        <p>{blog.content}</p>
      </div>
    )
  })
  return (
    <div>
      <h1>Blogoshpere</h1>
      {blogs}
    </div>
  )
}
export default Blog