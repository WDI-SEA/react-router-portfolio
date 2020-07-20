import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Project from './Project'
import Blog from './Blog'
import About from './About'
import Home from './Home'

function App() {
  let posts = [
    {title: "Title #1", content: "Some random content for the first post"},
    {title: "Second title", content: "Some more not so random text cuz Im doing this as a demo"},
    {title: "Three is enough right?", content: "I believe in the rule of three's so I say that three posts is enough"}
  ]



  return (
    <Router>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/blog" render={() => <Blog posts={posts} /> } />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
      </div>
    </Router>
  );
}

export default App;
