import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Blog from './Blog'
import Projects from './Projects'
import About from './About'

function App() {
  let posts = [
    {
      title: "I am tired",
      body: "I really should go to bed earlier."
    },
    {
      title: "I am hungry too",
      body: "I'm debating making chicken for dinner, or ordering take out."
    },
    {
      title: "Coffee",
      body: "Is there such thing as too much coffee?"
    }
  ]

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <div>
        <h1>These are words about me. . .</h1>
        <Route exact path="/" component={Home} />
        <Route path="/blog" render={() => <Blog posts={posts}/>} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}

export default App;
