import React, { Component } from 'react'

class Post extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.posts[this.props.match.params.id].title}</h1>
        <h3>{this.props.posts[this.props.match.params.id].date}</h3>
        <p style={{marginLeft: '25vw', marginRight: '25vw', fontSize: '25px'}}>{this.props.posts[this.props.match.params.id].post}</p>
        <p><img style={{marginLeft: '25vw', marginRight: '25vw', maxHeight: '80vh', maxWidth: '80vw'}} src={this.props.posts[this.props.match.params.id].image} /></p>
      </div>
    )
  }
}

export default Post