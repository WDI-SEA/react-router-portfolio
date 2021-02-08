import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Post extends Component {

    state = {
        title: '',
        content: ''
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
                <div>
                    <input onChange={this.changeTitle} type='text' placeholder='Title' />
                </div>
                <div>
                    <textarea onChange={this.changeContent} placeholder='Content'></textarea>
                </div>
                < Link to='/blog' >
                    <button onClick={() => this.props.createPost(this.state.title, this.state.content)}>Post</button>
                </Link>
            </div>
        )
    }
}

export default Post