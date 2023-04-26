export default function Blog(props) {

    const posts = props.posts.map((post, i) => {
        return (
            <div key={`post ${i}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        )
    })

    return (
        <div>
        <h1>im blog</h1>
        { posts }
        </div>
    )
}