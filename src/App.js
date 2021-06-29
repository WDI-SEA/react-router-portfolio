import './App.css';
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Home />
      <Blog />
      <About />
      <Projects />
    </div>
  );
}

export default App;
