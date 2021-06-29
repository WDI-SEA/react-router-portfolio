const Blog = (props) => {
    const renderedBlog = props.objects.map((objects) => {
        return (
            <div>
                <h2>{objects.name}</h2>
                <h4>{objects.description}</h4>
            </div>
    )
})
    return(
        <div>
            {renderedBlog}
        </div>
    )
}

export default Blog;