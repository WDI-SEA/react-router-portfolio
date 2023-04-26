import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Projects from "./components/pages/Projects";
import blogs from "./blogs.js";
import Layout from "./components/partials/Layout";

function App() {
  console.log(blogs)
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
              element={<Blog blogs={blogs}/>}
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
