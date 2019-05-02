import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'

//custom components
import Content from './navigation/Content'
import Header from './navigation/Header'
import Nav from './navigation/Nav'

function App() {


  return (
    <div className="App">
    <Header />
      <Router>
      	<div>
      		<Nav />
      		<Content />
      	</div>
      </Router>
    </div>
  );
}

export default App;
