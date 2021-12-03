import React, { Component } from "react"

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="postHeader">
                    <h4>{this.props.date} | {this.props.title}</h4>
                </div>
                <div className="postBody">
                    <p>{this.props.body}</p>
                </div>
            </div>
        )
    }
}