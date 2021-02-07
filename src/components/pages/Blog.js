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
        <form>
          <input type='text'name='title'placeholder='Title'></input>
          <input type='date'name='date' placeholder={Date}></input>
          <input type='text'name='post' placeholder='Write your blog post here'></input>
          <button type='submit'>Submit Post</button>
        </form>
      </div>
    )
  }
}

export default Blog