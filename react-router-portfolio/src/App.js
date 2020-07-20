import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

function App() {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "Learning to Code in 12 Weeks",
      content: "While washing the dishes last night I was reflecting on the fact that 8 weeks ago I had no idea what was going on inside my computer. Today, I have created a web application game, a full stack menu creating application and I am learning REACT.",
      date: "7/19/20"
    }, 
    { 
      title: "Combining Ed and Tech",
      content: "Learning code has introduced me to a whole new way of using my brain, now I am just trying to figure out how to combine my background in education and my new knowledge of coding.",
      date: "7/19/20"
    }
  ])
  // setBlogPosts()
  return (
    <Router>
      <div>
      <link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet" /
      >
        <nav>
          <Link to='/' className="nav">Home</Link>
          <Link to="/Blog" className="nav">Blog</Link>
          <Link to="/About" className="nav">About</Link>
          <Link to="/Projects" className="nav">Projects</Link>
        </nav>
        <Blog blogPosts={blogPosts} />
      </div>
      <div className="App">
        <h1 className="title">Welcome to Caitlin Smith's Porfolio</h1>
        <Route path='/' component={Home} />
        <Route path='/Blog' component={Blog} />
        <Route path='/About' component={About} />
        <Route path='/Projects' component={Projects} />
      </div>
    </Router>
  );
}


export default App;
