import { useParams } from "react-router-dom"

export default function Post(props) {
    const { blogId } = useParams()
    // spread all post and blog items into a new array
    const allBlogs = [...props.posts, ...props.blogs]
    // use .find() method to select the desired post by using the id from the url params
    const post = allBlogs.find(blog => blog.id === parseInt(blogId))

    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </>
    )
}