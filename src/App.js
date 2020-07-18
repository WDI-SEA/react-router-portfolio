import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'

function App() {

  let blogs = [
    { name: 'Salman', about:"Likes to wake ßup people when they're sleeping." },
    { name: 'Nick', about:"Super nice guy probably the nicest in the group" },
    { name: 'Nicholas', about:"He's the coolest" },
    { name: 'Charles', about:"Youngest of the group, kinda clumsy" },
    { name: 'Scott', about:"Loves plants and cats" },
    { name: 'Zack', about:"" },
  ]

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/About">About</Link>
          <Link to="/Projects">Projects</Link>
        </nav>
      </div>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Blog} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
