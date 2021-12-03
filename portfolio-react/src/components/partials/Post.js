import React, { Component } from "react";

export default class Post extends Component {
    render () {
        // console.log('logging comments!', this.props.comment)
        let allComments = this.props.post.comments.map(comment => {
            return (
                <p>{comment}</p>
            )
        })
        return (
            <div className='posts'>
            <h3>{this.props.post.title}</h3>
            <h4>{this.props.post.author}</h4>
            <p>{this.props.post.body}</p>
            <p>Comments:</p>
            {allComments}
            </div>
        )
    }

}