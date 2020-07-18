import React from 'react';
import './App.css';
import Nav from './Nav.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Welcome from './Welcome.js';
import About from './About.js';
import Projects from './Projects.js';
import Blog from './Blog.js';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Eliott Davidson's Portfolio</h1>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
      </div>
      <style jsx>
        {`
          body {
            margin: 15px;
          }
          .card {
            display: block;
            padding: 10px;
            max-width: 500px;
            margin: 18px auto;
            border: 2px solid black;
            border-radius: 10px;
            box-shadow: 4px 8px 15px #444444;
          }
          ul {
              display: inline-block;
              width: calc(50% - 20px);
          }
          li {
              text-align: left;
          }
          .list-label {
              display: inline-block;
              width: calc(50% - 20px);
              vertical-align: top;
              text-align: right;
          }
        `}
      </style>
    </Router>
  );
}

export default App;