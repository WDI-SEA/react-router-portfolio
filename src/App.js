import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './links'
import Blog from './blog'
import Projects from './Projects'

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/projects' component={Projects} />
      </div>
    </Router>
  );
}

export default App;
