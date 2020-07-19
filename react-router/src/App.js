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

  const deletePost = (post) => {
    let newBlogPosts = blogPosts.filter(blogPost => blogPost.id !== post.id)
    setBlogPosts(newBlogPosts)
  }

  return (
    <Router>
      <div>
        <nav>
          <h2>davves //</h2>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
          <Link to='/projects'>projects</Link>
          <Link to='/blog'>blog</Link>
        </nav>
      </div>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' render={() => <Projects projects={projects} />} />
        <Route path='/blog' render={() => <Blog posts={blogPosts} deletePost={deletePost} />} />
      </div>
    </Router>
  );
}

export default App;
