import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import BlogPosts from './Components/Statics/BlogPosts';
import MyProjects from './Components/Statics/MyProjects';

import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';
import Article from './Components/Partials/Article';
import Project from './Components/Partials/Project';
import Homepage from './Components/Pages/Homepage';
import Blog from './Components/Pages/Blog';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';

class App extends Component {
  render() {
    return(
      <Router>
        <Header />
        <main>
          <Route path='/' component={Homepage} />
          <Route path='/About_Me' component={About} />
          <Route 
            path='/Blog' 
            render={()=> <Blog blogPosts={BlogPosts}/>}
          />
          <Route
            path='/Blog/:id'
            render={(props)=> {
              const id = props.match.params.id;
              console.log(id)
              const articles = BlogPosts.find(({ id }) => id.toString() === props.match.params.id)
              console.log(articles)
              props = {...articles, ...id}
              return <Article {...props}/>
            }}/>
          <Route 
            path='/Projects' 
            render={()=> <Projects myProjects={MyProjects}/>} 
          />
          <Route 
            path='/Projects/:id'
            render={(props)=> {
              let id = props.match.params.id;
              console.log(id)
              let project = MyProjects.find(({ id }) => id.toString() === props.match.params.id)
              props = {...project, ...id}
              return <Project {...props} />
            }
            }/>
        </main>
        <Footer />
      </Router>
    )
  }
}

export default App;
