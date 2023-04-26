function Blog(props) {
    const allPosts = props.posts.map(post => {
        return (
            <div className="post-card">
                <h2>{post.title}</h2>
                <div className="container">
                    <p>{post.body}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <h1>Samwise, a Blogger</h1>

            {allPosts}
        </div>
    );
}

export default Blog;