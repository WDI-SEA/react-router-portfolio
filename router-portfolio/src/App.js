import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/partials/Header'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'

class App extends Component {
  state = {
    posts: [
      {title: "How I Met Your Mother", body: "I met her in New York"},
      {title: "Boku no Academia", body: "Will Izuku prevail?"},
      {title: "Genshin Impact", body: "Saving my primogems for Hu Tao"}
    ]
  }
  render() {
    return (
    <Router>
      {/* Homepage, Blog, About, Projects */}
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/blog" render={ () => <Blog posts={this.state.posts} /> }/>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
    )
  }
} 

export default App
