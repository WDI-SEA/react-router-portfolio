import React, { Component } from 'react'
import Comment from './Comment'

export default class Blog extends Component {
    state = {
        body: "Check out this hot cool blog post!!!!",
    }
    
    // helper method/eventHandler
    editBody = () => {
        const newBody = prompt("What should the new body be?")
        console.log(newBody)
        this.setState({
            body: newBody
        })
    }

    submitNewBody = (e) => {
        e.preventDefault()
        console.log("e.target: ", e.target[0].value)
        this.setState({
            body: e.target[0].value
        })
    }
    
    render() {
        // loop through comments array and display them below with {allComments}.  This is how you create a list of data
        let allComments = this.props.comments.map(c => {
            return <Comment content={c}/>
        })
        return (
            // use className within classes.  class Post exists so anything within should use className
            <div className="blogPost">
                <h1>Title: {this.props.title}</h1>
                <h2>Author: {this.props.author}</h2>
                <p>{this.state.body}</p>
                <form onSubmit={this.submitNewBody}>
                    <input type="text" name="new-body" />
                    <input type="submit" value="Edit Body" />
                </form>
                <hr></hr>
                <h3>Comments:</h3>
                {allComments}
            </div>
        )
    }
}