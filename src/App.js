import React from 'react'
import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './components/Home.jsx'
import Blog from './components/Blog.jsx'
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'

function App() {
  const posts = [
    {
      title: 'Unit 1',
      body: 'jabscript mm fun'
    },
    {
      title: 'Unit 2',
      body: 'backend? wait a sec'
    },
    {
      title: 'Unit 3',
      body: 'REACT? i am reacting though'
    },
    {
      title: 'Unit 4',
      body: 'python... why not a cottonmouth'
    }
  ]

  return (
    <div className="App">
     <Router>
       <Header />
       <Route 
       exact path='/'
       render={() => {
         return <Home />
       }}/>
       <Route 
       exact path='/blog'
       render={() => {
         return <Blog posts={posts}/>
       }}/>
       <Route 
       exact path='/about'
       render={() => {
         return <About />
       }}/>
       <Route 
       exact path='/projects'
       render={() => {
         return <Projects />
       }}/>

     </Router>
    </div>
  );
}

export default App;
