import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Comment