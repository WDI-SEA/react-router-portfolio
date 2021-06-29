import './App.css'
import {Route, Link} from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Homepage from './components/Homepage'
import Projects from './components/Projects'
import blogData from './blogData'


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
        <Link to='/'>Home Page</Link>
          </li>        
          <li>
        <Link to='/projects'>Portfolio</Link>
          </li>        
          <li>
        <Link to='/about'>About Me</Link>
          </li>        
          <li>
        <Link to='/blog'>Schizoidal Ramblings</Link>
          </li>        
        </ul>
      </nav>

      <Route exact path="/" component={Homepage}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/blog" render={() => <Blog blogData={blogData}/>}/>
    </div>
  )
}

export default App
