export const BlogPost = (props) => {
    return (
        <fieldset>
            <legend>{props.title}</legend>
                <p className="body-text">{props.body}</p>
        </fieldset>
    )
}