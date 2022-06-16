export default function Blog(props) {
    const blogPosts = props.posts.map((post, idx) => {
        return (
            <>
                <h4 key={`post-${idx}`}>{post.title}</h4>
                <p key={`post-${idx}`}>{post.body}</p>
            </>
        )
    })
    return (
        <>
            <ul>
                {blogPosts}
            </ul>
        </>
    )
}
