import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Blog extends Component {
  render() {
    return(
      <div className='App'>
        <ul>
          {this.props.posts.map((post, index) =>(
            <li key={`${index}`}><Link to={`/post/${index}`}>{post.title}</Link></li>
          ))}
        </ul>

      </div>
    )
  }
}

export default Blog