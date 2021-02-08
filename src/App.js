import './App.css';
import React, { Component } from 'react' 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Partials/Navbar.js'
import Home from './Components/Pages/Home'
import Blog from './Components/Pages/Blog'
import About from './Components/Pages/About'
import Projects from './Components/Pages/Projects'
import Post from './Components/Partials/Post.js'
import NewPost from './Components/Partials/EditPost.js'
import EditPost from './Components/Partials/Edit.js'

import Container from 'react-bootstrap/Container'

let posts = [
  {
    title: 'Hello World 1',
    content: 'This is my blogpost'
  }, {
    title: 'Hello World 2',
    content: 'This is my blogpost'
  }, {
    title: 'Hello World 3',
    content: 'This is my blogpost'
  }, {
    title: 'Hello World 4',
    content: 'This is my blogpost'
  }, {
    title: 'Hello World 5',
    content: 'This is my blogpost'
  }
]

class App extends Component {

  state = {
    posts: posts
  }

  createPost= (title, content) => {
    let postObject = {}
    let tempPosts = this.state.posts

    postObject.title = title
    postObject.content = content

    tempPosts.push(postObject)
    this.setState({
      post: tempPosts
    })
  }

  editPost= (id, title, content) => {
    let postObject = {}
    let tempPosts = this.state.posts

    postObject.title = title
    postObject.content = content

    tempPosts[id] = postObject
    this.setState({
      post: tempPosts
    })
  }

  deletePost = (id) => {
    let tempPosts = this.state.posts
    posts.splice(id, 1)
    this.setState({
      posts: posts
    })
  }

  render () {
    return (
    < Router >
      < Navbar />
      <Container className="App">
        < Route exact path="/" component={Home} />
        < Route exact path="/blog" render={() => < Blog posts={this.state.posts} />} />
        < Route exact path="/about" component={About} />
        < Route exact path="/projects" component={Projects} />


        < Route path='/post-new' render={(props) => {
        return < NewPost {...props} createPost={this.createPost} />}
        }/>

        < Route path='/post-edit/:id' render={(props) => {
          console.log(this.state.posts[props.match.params.id])
        return < EditPost {...props} editPost={this.editPost} post={this.state.posts[props.match.params.id]} />}
        }/>
        
        < Route path='/post/:id' render={(props) => {
        return < Post {...props} deletePost={this.deletePost} post={this.state.posts[props.match.params.id]} />}
        }/>
    
      </Container>
    </Router>
    )
  }
}

export default App;
