import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom"

import Header from './components/partials/Header';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import { posts } from './posts';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About  />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route 
            path="/blog"
            element={<Blog posts={posts}/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
