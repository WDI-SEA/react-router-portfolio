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
import Layouts from "./components/partials/Layouts";



const posts = []


function App() {
  return (
    <div className="App">
      <Router>

      <Layouts>
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
      </Layouts>
      </Router>
    </div>
  );
}

export default App;
