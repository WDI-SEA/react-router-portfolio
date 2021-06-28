import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import React, { useState } from 'react'

import About from './components/About'
import Blog from './components/Blog'
import Homepage from './components/Homepage'
import Projects from './components/Projects'

import blogData from './blogData'
import projectData from './projectData'

function App() {

  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Take me home!</Link>

          {" | "}

          <Link to="/about">Tell me more!</Link>

          {" | "}

          <Link to="/blog">Show me Blog!</Link>

          {" | "}

          <Link to="/projects">lets see projects!</Link>
        </nav>

        <Route 
          exact path="/"
          component={Homepage}
        />

        <Route 
          exact path="/about"
          component={About}
        />

        <Route 
          exact path="/blog"
          render={() => <Blog blogData={blogData} />}
        />

        <Route 
          exact path="/projects"
          render={() => <Projects projects={projectData}/>}
        />

      </Router>
    </div>

  );
}

export default App;
