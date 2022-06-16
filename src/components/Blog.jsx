// const Blog = () => {
//   return (
//     <>
//       <h1>Blog</h1>
//     </>
//   )
// }
// export default Blog


export default function Blog(props) {
  const blogs = props.blogData.map((blog, idx) => {
    return (
      <div key={`${blog.title}-${idx}`}>
        <h3>{blog.title}</h3>

        <p>{blog.content}</p>
      </div>
    )
  })
  return (
    <div>
      <h1>Blogs:</h1>
      {blogs}
    </div>
  )
}