import './Blog.css';

export default function Blog(props) {
    const renderedPost = props.posts.map((post,index) => {
        return (
            <li>
                <h3>Title: {post.title}</h3>
                <p>{post.body}</p>
            </li>
        )
    })
    return(
        <div class="blog-div">
            <h2 className="blog-title">Blog Posts</h2>
            <ul className="blog-post">
                {renderedPost}
            </ul>
        </div>
    )
}