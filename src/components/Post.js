import '../css/Blog.css'

const Post = props => {
    return (
        <div className='postContainer'>
            <h3 className='blogTitle'>{props.post.title}</h3>
            <small className='blogDate'>{props.post.date}</small>
            <p className='blogBody'>{props.post.body}</p>
            <hr />
        </div>
    )
}

export default Post