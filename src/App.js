import './App.css';
import About from './components/About'
import Blog from './components/Blog'
import Header from './components/Header'
import Projects from './components/Projects'
import Homepage from './components/Homepage'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const posts = [
  {
    id:1,
    title: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar nulla id ex suscipit'
  },
  {
    id:2,
    title: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a diam dapibus, lacinia tellus id, tincidunt erat. Fusce vitae laoreet augue, in ultrices arcu. Fusce aliquam odio et convallis pharetra. '
  },
  {
    id:3,
    title: 'Lorem ipsum dolor sit amet',
    body: 'Duis porta fermentum erat et tristique. Integer congue consectetur nunc in fringilla. Nam sodales tellus vitae tortor lacinia bibendum.'
  }
]
 


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Route exact path='/' component={Homepage} />

        <Route path='/about' component={About} />

        <Route path='/blog' 
          render={() => <Blog posts={posts} />}
        />

        <Route path='/projects' component={Projects} />



      </Router>
    </div>
  );
}

export default App
