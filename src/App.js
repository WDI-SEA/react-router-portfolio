import React from 'react';
import './App.css';
import About from './About'
import Home from './Home'
import Blog from './Blog'
import Projects from './Projects'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {

  let posts = [
    {Content: "This is the first", Title: "Post 1"},
    {Content: "This is the second", Title: "Post 2"},
    {Content: "This is the third", Title: "Post 3"}
  ]

  return (
    <Router>
       <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/blog">Blog</Link>
          <br />
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path ="/blog" render={() => <Blog posts={posts} />}/>
        <Route path ="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
