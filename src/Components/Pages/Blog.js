import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

class Blog extends Component {
  render () {

    let posts = this.props.posts.map((post, i) => {

        return (
        <Card style={{ width: '18rem' }} className="text-left">
        <Card.Img variant="top" src="http://placekitten.com/200/200" />
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
            {post.content}
            </Card.Text>
            < Link to={`/post/${i}`} ><Button variant="primary">See Post</Button></Link>
        </Card.Body>
        </Card>
        )
    })
    return (
      <div className="App">
        <h1>Blog</h1>
        < CardColumns >
            {posts}
        </ CardColumns>

        < Link to='/post-new' >< Button>Create New Post</Button></Link>
      </div>
    )
  }
}

export default Blog
