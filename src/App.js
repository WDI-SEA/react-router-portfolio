import './App.css';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'


function App() {
  const posts = [
  {
    title: "Morticia Addams",
    body: "I'm just like any modern woman trying to have it all. Loving husband, a family. It's just, I wish I had more time to seek out the dark forces and join their hellish crusade."
  },
  {
    title: "Viago",
    body: "One year I went to the Unholy Masquerade dressed as Whoopi Goldberg from 'Sister Act 1' and 'Sister Act 2: Back in the Habit'. Didn't go down so well because she was a nun. Weird. Vampires don't like nuns."
  },
  {
    title: "Nadja",
    body: "So they just flit around, shame bats. Bats full of shame. And you know them, cause they don’t fly as high."
  }
]

  return (
    <div className="App">
      
      <Router>
        <Header />
          <Route 
            exact path="/"
            component={Homepage}
          />
          <Route 
            path="/about"
            component={About}
          />
          <Route
            path= "/blog"
            render={() => <Blog posts={posts} />}
          />
          <Route 
            path= "/projects"
            component={Projects}
          />
        </Router>
    </div>
  );
}

export default App;
