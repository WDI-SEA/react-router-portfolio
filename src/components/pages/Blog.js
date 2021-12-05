import '../../css/Blog.css'
import Post from '../Post'

const Blog = props => {
    const allPosts = props.posts.map((post, i) => {
        return (
            // <div>
            //     <h3>{post.title}</h3>
            //     <small>Written on: {post.date}</small>
            //     <p>{post.body}</p>
            //     <hr />
            // </div>
            <Post key={i} post={post} />
        )
    })
    return (
        <div>
            <h1 className='blogHeader'>Blog</h1>
            {allPosts}
        </div>
    )
}

export default Blog