import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import Blog from './Components/Blog'
import About from './Components/About'
import Projects from './Components/Projects'
import BlogData from './api/BlogData'
import ProjectData from './api/ProjectData'

function App() {
  const [blogPosts, setBlogPosts] = useState(BlogData)

  const [projects, setProjects] = useState(ProjectData)

  return (
    <Router>
      <div>
        <nav>
          <h2>davves //</h2>
          <Link to='/'>home</Link>
          <Link to='/blog'>blog</Link>
          <Link to='/about'>about</Link>
          <Link to='/projects'>projects</Link>
        </nav>
      </div>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={() => <Blog posts={blogPosts} />} />
        <Route path='/about' component={About} />
        <Route path='/projects' render={() => <Projects projects={projects} />} />
      </div>
    </Router>
  );
}

export default App;
