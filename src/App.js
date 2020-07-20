import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

function App() {
  const [posts, setPosts] = useState([{
      title: "First Blog Post",
      body: "Hey!  This is my first blog post for React.  I'm excited to learn more about this framework that's been taking over!"
    },
    {
      title: "Second Blog Post",
      body: "Yup, so this is the second post and that's awesome"
    }
  ])
  console.log(posts)

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Homepage</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/blog" render={ () => <Blog posts={posts} />} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  )
}

export default App;
