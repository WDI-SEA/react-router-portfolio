import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/pages/Blog";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Header from "./components/partials/Header";

const posts = [
  {
    title: "lorem and ipsum, a tale of two sons",
    body: "there once were two sons named Lorem and Ipsum. No one liked them. ",
  },
  {
    title: "A man and a boat",
    body: "There once was a man on a boat. His only friend was the ocean. something something Lorem ipsom",
  },
  {
    title: "Random words",
    body: "After a long day of learning, one does not simply come up with random gibberish to type so easily.",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
