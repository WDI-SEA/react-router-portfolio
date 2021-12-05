import '../../css/Blog.css'

const Blog = props => {
    const allPosts = props.posts.map((post, i) => {
        return (
            <div>
                <h3>Title: {post.title}</h3>
                <small>{post.date}</small>
                <p>{post.body}</p>
                <hr />
            </div>
        )
    })
    return (
        <div>
            <h1>This is the blog page</h1>
            {allPosts}
        </div>
    )
}

export default Blog