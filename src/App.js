import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Projects from "./components/pages/Projects";
import Layout from "./components/partials/Layout";

function App() {
  const [bgClass, setBgClass] = useState("bg-grey");

  const handlePageChange = (bgClassName) => {
    setBgClass(bgClassName);
  };

  const posts = [
    {
      title: "4/26",
      body: "today I left the skeleton of the deliverable mostly blank because I was more interested in finding a way to dynamically change the background color of the page based on the navigated-to component.  it was a p good day"
    },
    {
      title: "4/25",
      body: "this would be the post I would have made yesterday"
    }
  ]

  return (
    <div className={`App ${bgClass}`}>
      <Router>
        <Layout handlePageChange={handlePageChange}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog posts={posts}/>} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
