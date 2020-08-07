import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import About from "./About"
import Blog from "./Blog"
import Homepage from "./Homepage"
import Projects from "./Projects"
import './App.css';

function App() {
  const [posts] = useState({
    
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>React router DOM</h1>
      </header>
      <nav>
        <ul>
          <Link to="/">
            <l1>
              Homepage
          </l1>
          </Link>
          <Link to="/about">
            <l1>
              About
          </l1>
          </Link>
          <Link to="/blog">
            <l1>
              Blog
          </l1>
          </Link>
          <Link to="/projects">
            <l1>
              Projects
          </l1>
          </Link>
        </ul>
      </nav>
      <switch>
        <Route exact path="/" render={() =>
          <Homepage />
        } />
        <Route exact path="/about" render={() =>
          <About />
        } />
        <Route exact path="/blog" render={() =>
          <Blog />
        } />
        <Route exact path="/projects" render={() =>
          <Projects />
        } />
      </switch>




    </div>
  );
}

export default App;
