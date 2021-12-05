const Post = props => {
    return (
        <div>
            <h3>{props.post.title}</h3>
            <small>Written on: {props.post.date}</small>
            <p>{props.post.body}</p>
            <hr />
        </div>
    )
}

export default Post