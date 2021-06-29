// router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// components
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'

// styling
import './App.css';

export default function App() {
  return (
    <div className="container">
      <Router>
        <Header />

        <Route
          exact path="/"
          component={Home}
        />

        <Route
          path="/projects"
          component={Projects}
        />

        <Route
          path="/blog"
          component={Blog}
        />

        <Route
          path="/about"
          component={About}
        />

      </Router>
    </div>
  );
}