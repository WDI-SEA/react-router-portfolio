import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './component/Home'

class App extends Component {
  render(){
    return (
      <Router>
        <main className="App">
          <Route exact path="/" component={Home} />
        </main>
      </Router>
    );
  }
}

export default App;
