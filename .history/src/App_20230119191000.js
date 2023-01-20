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
      content: "This is my first post",
      author: "Nina",
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
      author: "Johnny Doe",
      id: 3,
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
