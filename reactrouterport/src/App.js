import React from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import './App.css';
import About from './About'
import Home from './Home'
import Blog from './Blog'
import Projects from './Projects'

function App() {
  // let Blog = [
  //   "Deep Cleaning",
  //   "Filling",
  //   "Crown",
  //   "Root Canal",
  //   "Oral Surgery"
  // ]



  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Homepage </Link>
          <Link to="Blog">Blog</Link>
          <Link to="/About">About</Link>
          <Link to="/Projects">Projects</Link>
        </nav>
      </div>
      <div className="App">
        <h1>Luke's Page ! </h1>
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Blog} />
        {/* <Route path="/Blog" render={() => <Blog Blog={Blog} />} /> */}
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />

      </div>
    </Router>
  );
}

export default App;
