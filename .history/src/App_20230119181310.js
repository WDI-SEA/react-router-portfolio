import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
