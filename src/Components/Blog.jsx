export default function Blog(props) {
  const blogPosts = props.blogPosts.map((posts, index) => {
    console.log(props.blogPosts)
    return (
      
      <div key={`project-${index}`}>
        <h3 key={`title-${index}`}>{posts.title}</h3>
        <p key={`paragraph-${index}`}>{posts.content}</p>
      </div>
    )
  })
  return (
    <div>
      <h1>Blog Page 📝</h1>
      {blogPosts}
    </div>
  )
}

