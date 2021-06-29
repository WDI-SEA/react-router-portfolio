export default function Blog(props) {
  const blogPost = props.posts.map((post, index) => {
    return (
      <div key={`blog ${index}`}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
    
      </div>
    )
  })
  return(
    <div>
      <h1>Hey from blog</h1>
      {blogPost}
    </div>

  )
}