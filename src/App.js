import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'
import Blog from './Blog'

let projects = [
  "Blackjack",
  "myMelody",
  "myPortfolio"
]

let blog = {
  posts: [
    {title: 'articel1', author: 'author1', content: 'content1', comments: ['comment11']},
    {title: 'article2', author: 'author2', content: 'content2', comments: ['comment21', 'comment22']},
    {title: 'article3', author: 'author3', content: 'content3', comments: ['comment31', 'comment32', 'comment33']},
    {title: 'article4', author: 'author4', content: 'content4', comments: ['comment41', 'comment42', 'comment43', 'comment44']},
    {title: 'article5', author: 'author5', content: 'content5', comments: ['comment51', 'comment52', 'comment53', 'comment54','comment55']}
  ]
}

function App() {
  const [posts, setPosts] = useState(blog.posts)
  const [current, setCurrent] = useState({})

  return (
    <Router>
      <div>
        <nav>
          <Link className="home" to="/">Home</Link>
          <Link  className="projects" to="/projects">Projects</Link>
          <Link className="blog" to="/blog">Blog</Link>
          <Link className="contact" to="/contact">aboutMe</Link>
        </nav>
      </div>
      <div className="App">
        <h1>myPortfolio</h1>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" render ={() => <Projects projects={projects} />} /> 
        <Route path="/blog" render={ () => <Blog posts={posts} /> }/>
      </div>
    </Router>
  );
}

export default App
