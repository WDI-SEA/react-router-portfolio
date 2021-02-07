import React, { Component } from 'react'

class Post extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.posts[this.props.match.params.id].title}</h1>
        <h3>{this.props.posts[this.props.match.params.id].date}</h3>
        <p>{this.props.posts[this.props.match.params.id].post}</p>
      </div>
    )
  }
}

export default Post