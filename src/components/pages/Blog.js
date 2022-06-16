export default function Blog(props) {
    const postsToRender = props.posts.map((post, i) => {
        return (
            <div key={`blog-${i}`}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </div>
        )
    })
    return (
        <>
            <h2>Blog</h2>
            {postsToRender}
        </>
    )
}