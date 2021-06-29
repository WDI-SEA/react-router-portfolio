export const BlogPost = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div className="body-box">
                <p className="body-text">{props.body}</p>
            </div>
        </div>
    )
}