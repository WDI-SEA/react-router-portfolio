import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import Blog from "./Blog";
import About from "./About";
import Projects from "./Projects";
import BlogInstance from "./BlogInstance";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
      <Route path="/blog/:pancakeId" element={<BlogInstance />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
  </BrowserRouter>,
  rootElement
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
