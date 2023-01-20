import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Header from "./components/Header";



function App() {
  let posts = [
    //create a post object
    {
      title: "My first post",
      content: "This is my first post",
      author: "John Doe",
      id: 1,
    },
    {
      title: "My second post",
      content: "This is my second post",
      author: "Jane Doe",
      id: 2,
    },
    {
      title: "My third post",
      content: "This is my third post",
      author:




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
