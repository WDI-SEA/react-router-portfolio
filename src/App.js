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
import Navbar from 'react-bootstrap/Navbar'

function App() {
  let [posts, setPosts] = useState([
    {
    title: "My Coding Journey Begins",
    date: "5/26/2020",
    content: "On my first day at General Assembly..."
  },
  {
    title: "Learning React",
    date: "7/14/2020",
    content: "This new framework has destructured everything I knew"
  }
  ])
  return (
    <Router>
      <div>
        <Container>
          <Row>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/blog">My Blog</Link>{' '}
          <Link to="/about">About Me</Link>{' '}
          <Link to="/projects">My Projects</Link>
        </nav>
        </Navbar>
        <Route exact path="/" component={Homepage} />
        <Route path="/blog" render={() => <Blog posts={posts} />} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
