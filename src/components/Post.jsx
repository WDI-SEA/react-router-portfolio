export default function Post(props) {
  const posts = props.posts.map((post, index) => {
    return (
      <div key={index}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    )
  })

  return (
    <div>
      {posts}
    </div>
  )
}
