import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'

function App() {

  let blogPosts = [{
    title: "Learn how to use React hooks",
    body: "Through utilizing components such as useState and useEffect, we are able to quickly update state of an object to set it value to whatever we need it to. Click the link below to learn more"
  }, {
    title: "Learn my deepest darkest secrets",
    body: "First: hit me up on paypal, then learn what it was like to be in a cult as a young child"
  }, {
    title: "Find out what my plans are post cohort",
    body: "Follow me on all social media platforms so that you can watch my journey of begging my way into a new job position (@zbarovsky)"
  }]

  const [post, setPost] = useState(blogPosts)


  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blogs</Link>
          <Link to='/about'>About Me</Link>
          <Link to='/projects'>Projects</Link>
        </nav>
      </div>
      <div className="App">
        <h1>All About Zack</h1>
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={() => <Blog posts={post} /> } />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
      </div>
    </Router>
  );
}

export default App;
