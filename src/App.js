import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './links'
import Blog from './blog'
import Projects from './Projects'
import AboutMe from './AboutMe'

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/AboutMe' component={AboutMe} />
      </div>
    </Router>
  );
}

export default App;
