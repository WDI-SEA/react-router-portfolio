export default function Blog(props) {
    const displayPosts = props.posts.map((post, index) => {
        return (
            <li key={index}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </li>
        )
    })

    return (
        <ul>
            {displayPosts}
        </ul>
    )
}