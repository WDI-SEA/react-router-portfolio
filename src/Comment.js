import React from 'react';

const Comment = props => {
    return (
        <div>
            <h4>Comment: </h4>
            <ul>
                {props.posts.comments.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comment;