
const Blog = (props) => {
    const renderPost = props.posts.map((post, i) => {
        return (
            <div key={`blog${i}`} >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
    })
    return (
        <>
            <h1>Blog posts</h1>
            {renderPost}
        </>
    )
}

export default Blog