import React from 'react'
import Comment from './Comment'

 function Article(props) {
    return (
        <div className="article">
            <h3>Title: {props.article.title}</h3>
            <h4>Author: {props.article.author}</h4>
            <h4>Content:</h4>
            <p>{props.article.content}</p>
            <h4>Comment:</h4>
            <p>{props.article.comments}</p>   
        </div>
    )
}

export default Article