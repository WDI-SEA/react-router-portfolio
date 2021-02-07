import React, { Component } from 'react'
import './App.css';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Header from './components/partials'

class App extends Component  {

  render () {
    return( 
      <Router>

      <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path ="/blog" component= {Blog} />
      <Route path ="/about" component={About} />
      <Route path ="/projects" component={Projects} />
      </div>
      </Router>
    )
    }
  }

export default App;
