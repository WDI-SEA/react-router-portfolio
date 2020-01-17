import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import HomePage from './HomePage';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

class App extends React.Component {
  state = {
    posts: [
      {title: 'Blog 1', body: 'This is the body of Blog 1.'},
      {title: 'Blog 2', body: 'This is the body of Blog 2.'},
      {title: 'Blog 3', body: 'This is the body of Blog 3.'}
    ]
  }

  render() {

    return (
      <Router>
      <div className='app'>
      <ul className='nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li> 
      </ul>
        <Route exact path='/' component={HomePage}/>
        <Route path='/blog'
          render={() => (
            <Blog posts={this.state.posts} />
          )}
        />
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
      </div>
      </Router>
    )
  }
}

export default App;
