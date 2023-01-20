import Post from './Post'

export default function Blog(props) {
  return (
    <div>
      <h1>Blog</h1>
      <Post posts={props.posts} />
    </div>
  )
}