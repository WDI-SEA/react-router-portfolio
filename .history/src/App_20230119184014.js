import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Header from "./components/Header";



function App() {
  let posts = [
    //create a post object

    
  ]

  return (
    <BrowserRouter>
      <Header />
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
