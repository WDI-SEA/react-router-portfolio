import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Layout from './partials/Layout';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/about"
              element={<About />}
            />
            <Route 
              path="/blog"
              element={<Blog />}
            />
            <Route 
              path="/projects"
              element={<Projects />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
