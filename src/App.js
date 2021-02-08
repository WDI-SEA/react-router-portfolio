import React, { Component } from 'react'
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/partials/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'
import blogPosts from './data/blogPosts'

class App extends Component {
  render () {
    return (
      <Router>
        <Header></Header>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" render={() => <Blog blog={blogPosts} />} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    )
  }
};

export default App;
