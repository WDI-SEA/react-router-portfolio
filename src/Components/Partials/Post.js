import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

class Post extends Component {
    render () {
        return (
            <div className="App">
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.content}</p>
                < Link to='/blog' >
                    <button onClick={() => this.props.deletePost(this.props.match.params.id)}>Delete</button>
                </Link>
                < Link to={`/post-edit/${this.props.match.params.id}`} >
                    <button>Edit</button>
                </Link>
            </div>
        )
    }
}

export default Post