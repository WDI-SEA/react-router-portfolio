import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Blog from './Blog'
import Projects from './Projects'
import About from './About'

function App() {
  return (
    <div>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <div>
        <h1>My Blog</h1>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" compnent={About} />
      </div>
    </div>
  )
}

export default App;
