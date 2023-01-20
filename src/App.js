import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/paths/Home';
import Header from './components/partials/Header';
import About from './components/paths/About';
import Blog from './components/paths/Blog';
import blogPosts from './blogPosts';
import Projects from './components/paths/Projects';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/homepageforTheoRobinsonPortfoliodotcom" element={<Home />} />
        <Route path="/ideasformulatedcontaining" element={<About />} />
        <Route path="/writtenarticlesbypeoplewhoyoudefinitelycareabout" element={<Blog posts={blogPosts}/>} />
        <Route path="/thinkotherpeoplethinkthesameplural" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
