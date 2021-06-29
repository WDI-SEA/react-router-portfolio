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


function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />



      </Router>



    </div>
  );
}

export default App;
