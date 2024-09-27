import { Link } from "react-router-dom"

export default function Blog(props) {
    const blogPosts = props.posts.map((post, i) => {
        return (
            <h2>
                <Link to={`/blog/${post.id}`}>
                    {post.title}
                </Link>
            </h2>
        )
    })
    return (
        <>
            <h1>Dxk0ta's Blog!</h1>
            {blogPosts}
        </>
    )
}