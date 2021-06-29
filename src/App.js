import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import blogPost from './blogPost'
import projects from './projects'
import Homepage from './components/Homepage'
import Projects from './components/Projects'



function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <ul>
             <Link to='/'>Home</Link>
            </ul>
            <ul>
            <Link to='/about'>About</Link>
            </ul>
            <ul>
            <Link to='/blog'>Blog</Link>
            </ul>
            <ul>
            <Link to='/projects'>Projects</Link>
            </ul>
          </ul>
        </nav>


        <Route
          exact path='/'
          render={() => <Homepage/>}
          />

        <Route
          exact path='/about'
          render={() => <About/>}
          />

        <Route
          exact path='/blog'
          render={() => <Blog blogPost={blogPost}/>}
          />

        <Route
          exact path='/projects'
          render={() => <Projects projects={projects}/>}
          />

      </Router>
    </div>

  )
}

export default App;
