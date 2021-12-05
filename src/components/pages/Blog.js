import '../../css/Blog.css'
import Post from '../Post'

const Blog = props => {
    const allPosts = props.posts.map((post, i) => {
        return (
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