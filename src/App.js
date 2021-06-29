import './App.css'
import Homepage from './components/Homepage'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const posts = [
  {
    title: 'Do Nots',
    body: 'Don\'t wear jeans under your white coat. Its unprofessional, even though it may be more comfortable and convenient.'
  }, 

  {
    title: 'Times they are a changin\'',
    body: 'Major changes have recently occured in my life, both personally and professionally. We\'re approaching five years since the inception of this blog, and going back to read the posts from May \'04 is quite the experience. I suppose its what diaries and journals are for, the chance to go back and read out your thoughts and ideas from another time. Kind of like mental time travel.'
  },
  {
    title: 'Brighter Days Ahead',
    body: 'Tough times, these. Resolution of conflicts on many fronts helps, but more is to come. Once we\'ve jetted off east things will really start looking up. But until then: paint, parking, wood, tables, chairs, sardar, food, drink, lists, healthy doses of work and many more.. We\'re getting there.'
  },
]

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <Link to='/'>Home---</Link>
            <Link to='/about'>About---</Link>
            <Link to='/blog'>Blog---</Link>
            <Link to='/projects'>Projects</Link>
          </ul>
        </nav>

        <Route exact path='/' component={Homepage} />

        <Route exact path='/about' component={About} />

        <Route exact path='/projects' component={Projects} />

        <Route exact path='/blog'
        render={() => <Blog posts={posts} />}
        />

      </Router>
    </div>
  )
}

export default App
