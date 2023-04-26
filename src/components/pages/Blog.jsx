import {Link} from "react-router-dom"

export default function Blog(props) {
    const blogPosts = props.posts.map((post,i) => {
    return(
        <h3>
        <Link to={`/blog/${post.id}`}>
         {post.title}
        </Link>
        </h3>
    )
})
return(
<>
<h2>
    {blogPosts}
</h2>
</>
)
}