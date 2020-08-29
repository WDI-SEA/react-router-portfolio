import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Projects from './pages/Projects';
import Weather from './pages/Weather';

export default function Content(props) {  
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" render={() => <Blog posts={props.posts} />} />
        {/* <Route path="/blog/new" component={NewPost} /> */}
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </main>
  )
}