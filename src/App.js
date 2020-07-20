import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from './components/NavBar';
import Home from './components/Home';
import Blog from './components/blog/Blog';
import Projects from './components/projects/Projects';
import About from './components/About';

import './App.css';

function App() {
  return (
    <Router>
        <Container>
          <Row>
            <Col xl={ 1 }></Col>
            <Col xl={ 10 }>
              <Navbar />
              <Route exact path="/" component={ Home } />
              <Route path="/blog" component={ Blog } />
              <Route path="/projects" component={ Projects } />
              <Route path="/about" component={ About } />
            </Col>
            <Col xl={ 1 }></Col>
          </Row>
        </Container>
    </Router>
  );
}

export default App;
