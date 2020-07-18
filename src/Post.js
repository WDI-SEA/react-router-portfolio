import React from 'react';

const Post = (props) => {
    return (
        <div>
            <h3>{props.postInfo.title}</h3>
            <p>{props.postInfo.text}</p>
        </div>
    )
}
export default Post;