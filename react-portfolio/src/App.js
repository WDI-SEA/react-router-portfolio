import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import About from './About'
import Blog from './Blog'
import Home from './Home'
import Projects from './Projects'

function App() {
  let [posts, setPosts] = useState([
      { title: 'Hello World', body: 'Cats are great' },
      { title: 'Welcome SEI 29', body: 'noobs' }
    ])

  return (
    <div className="App">
      <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Route exact path="/" component={Home} />
            <Route path="/blog" render={() => (
                <Blog posts={posts} />
              )} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
          </div>
      </Router>
    </div>
  );
}

export default App;
