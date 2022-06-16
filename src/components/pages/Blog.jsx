export default function Blog({ posts }) {
  const postElements = posts.map((post) => {
    return (
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    )
  })
  return (
    <>
      <h1>Blog</h1>
      {postElements}
    </>
  )
}
