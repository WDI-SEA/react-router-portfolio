import React, ( Component ) from 'react'

class Post extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.posts.title[this.props.match.params.id]}</h1>
        <h3>{this.props.posts.date[this.props.match.params.id]}</h3>
        <p>{this.props.posts.post[this.props.match.params.id]}</p>
      </div>
    )
  }
}

export default Post