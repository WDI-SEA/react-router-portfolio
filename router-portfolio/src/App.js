import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Content from './nav/Content'
import Header from './nav/Header'
import Nav from './nav/Nav'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Router>
          <div>
            <Nav />
            <Content />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
