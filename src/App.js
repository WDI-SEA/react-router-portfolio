import './App.css';
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

//The main App should hold an array of post objects, each with a title and a body, both strings.

const posts = [
  {
  title: "Post1",
  body: "Text here"
  },
  {
  title: "Post2",
  body: "Text here"
  },
  {
  title: "Post3",
  body: "Text here"
  }

]


function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />

        <Route 
          path="/blog" 
          render={() => <Blog posts={posts} /> }/>

        <Route path="/projects" component={Projects} />

      </Router>



    </div>
  );
}

export default App;
