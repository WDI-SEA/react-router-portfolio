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
      Name: "Nina Mbarack",
      blog: "React is awesome",
      projects: "Project 1",
      about: "I am a software engineer",
      id: 1,
    },
    {
      Name: "",
      blog: "This my blog ",
      projects: "Splendid",
      about: "Aussie Mom",
      id: 1,
    },
    {
      Name: "",
      blog: "This my blog ",
      projects: "Project 3",
      about: "Author",
      id: 1,
    },
  ]

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage posts={posts}/>} />
        <Route path="/about" element={<About  posts={posts}/>} />
        <Route path="/projects" element={<Projects  posts={posts}/>} />
        <Route path="/blog" element={<Blog  posts={posts}/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
