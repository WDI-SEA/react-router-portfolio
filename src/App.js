import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import './App.css';
import Layout from "./components/partials/Layout";
import About from "./components/pages/About";
import Homepage from "./components/pages/Homepage";
import Blog from "./components/pages/Blog";
import Projects from "./components/pages/Projects";
import { posts } from "./postsCopy"
import { projectData } from "./projectData"

function App() {
  

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/blog" element={ <Blog posts={posts} /> } />
            <Route path="/projects" element={ <Projects projectData={projectData} /> } />
          </Routes>
        </Layout>
      </Router>
      
    </div>
  );
}

export default App;
