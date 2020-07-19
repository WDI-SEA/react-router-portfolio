import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './components/Homepage'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  let blogItems = [
    title: "My Coding Journey Begins",
    date: ""
  ]
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/blog">My Blog</Link>{' '}
          <Link to="/about">About Me</Link>{' '}
          <Link to="/projects">My Projects</Link>
        </nav>
        <Route exact path="/" component={Homepage} />
        <Route path="/blog" render={() => <Blog blogItems={Blog} />} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
