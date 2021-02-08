import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'
import Header from './components/partials/Header'
import Widget from './components/pages/Widget'

class App extends Component {
  render() {
    let posts = {
      state: {
        title: '',
        body: ''
      }
    }


    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/blog" render={() => <Blog blog={posts} /> } />
          <Route path="/widget/:id" render={(props) => <Widget {...props} blog={posts}/>} />
        </div>
      </Router>
    )
  }
}

export default App
