import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './partials/Header';
import Homepage from './components/Homepage';
import Blog from './components/Blog';
import Project from './components/Projects';
import About from './components/About';
import Blogstuff from './Blogstuff'


const App = () => {

  const [ blogContent , setBlogContent ] = useState (Blogstuff)
  const [ title, setTitle] = useState('')
  const [ story, setStory] = useState('')

  // const showBlog = () => {
  //   setBlogContent(Blogstuff)
  // }

  console.log('🔥', blogContent)

    return (
      <Router>
        <Header/>
        <main className="App">
          <Route exact path="/" component={Homepage}/>
          <Route path="/blog" render={ () => 
            <Blog blogContent={blogContent} />}
          />
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Project}/>

        </main>
      </Router>
    );
  
}

export default App;
