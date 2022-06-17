function Blog(props) {
    const post = props.posts.map((post, i) => {
        return <div key={`post${i}`}>
            <h2>Title: {post.title}</h2>
            <p>- {post.body}</p>
        </div>
    })
    return (
        <>
            <h2>Blog</h2>
            {post}
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input 
                type="text" name="title" value={props.newPost.title} onChange={props.handleChange}/>
                <label htmlFor="body">Body: </label>
                <input type="text" name="body" value={props.newPost.body} onChange={props.handleChange}/>

                <button type="submit">Post</button>
            </form>
        </>
    );
}

export default Blog;