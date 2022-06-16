export default function Homepage(props) {
    return (
        <div className='post-container'>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
            <hr></hr>
        </div>
       
    )
}