import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Blog from './pages/Blog'

const App = () => {
  const [posts] = useState([
    {title: 'title1', body: "body1"},
    {title: 'title2', body: 'body2'},
    {title: 'title3', body: 'body3'}
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Router DOM</h1>
      </header>
      <nav>
        <ul>
          <Link to='/'>
            <li>
              Homepage
            </li>
          </Link>
          <Link to='/about'>
            <li>
              About
            </li>
          </Link>
          <Link to='/blog'>
            <li>
              Blog
            </li>
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' render={() =>
          <>
            <Homepage />
          </>
        } />
        <Route exact path='/about' render={() =>
          <>
            <About />
          </>
        } />
        <Route exact path='/blog' render={() =>
          <>
            <Blog posts={posts} />
          </>
        } />
      </Switch>
    </div>
  );
}

export default App;