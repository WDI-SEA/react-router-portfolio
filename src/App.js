import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'

function App() {

  let blogs = [
    { 
      name: 'Salman', 
      about: "Likes to wake up people when they're sleeping." 
    },
    { 
      name: 'Nick', 
      about: "Super nice guy probably the nicest in the group" 
    },
    { 
      name: 'Nicholas', 
      about: "He's the coolest" 
    },
    { 
      name: 'Charles', 
      about: "Youngest of the group, kinda clumsy" 
    },
    { 
      name: 'Scott', 
      about: "Loves plants and cats" 
    },
    { 
      name: 'Zack', 
      about: "Very good at CSS, would like to get advice from him." },
  ]

  return (
    <Router>
      <div className="App">
        <nav className="app-nav">
          <div className="link-container">
            <Link className="home-link" to="/">Home</Link>
            <Link className="home-link" to="/Blog">Blog</Link>
            <Link className="home-link" to="/About">About</Link>
            <Link className="home-link" to="/Projects">Projects</Link>
          </div>
        </nav>
      </div>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/Blog" render={() => <Blog contents={blogs} />} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
