import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

class Post extends Component {

    state = {
        title: this.props.post.title,
        content: this.props.post.content
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    changeContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render () {
        return (
            <div className="App">
                <h1>{this.props.post.title}</h1>
                <div>
                    <textarea onChange={this.changeTitle} type='text'>{this.props.post.title}</textarea>
                </div>
                <div>
                    <textarea onChange={this.changeContent}>{this.state.content}</textarea>
                </div>
                < Link to='/blog' >
                    <button onClick={() => this.props.editPost(this.props.match.params.id, this.state.title, this.state.content)}>Submit Edit</button>
                </Link>
            </div>
        )
    }
}

export default Post