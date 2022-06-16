function Blog(props) {
    const post = props.post.map((post, i) => {
        return <div key={`post${i}`}>
            <h2>Title: {post.title}</h2>
            <p>- {post.body}</p>
        </div>
    })
    return (
        <>
            <h2>Blog</h2>
            {post}
        </>
    );
}

export default Blog;