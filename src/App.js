import "./App.css";
import Test from "../src/galleriaSavesPlanet.jpeg";
import TestTwo from "../src/perfectPet.jpeg";
import About from "./components/About";
import React, { Component } from "react";
import Blog from "./components/Blog";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Header from "./partials/header";
import ChoosenBlog from "./components/ChoosenBlog";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

let skills = {
  languages: [
    {
      theSkill: "HTML",
      theImage: <i class="fab fa-4x fa-html5 text-primary mb-4"></i>,
    },
    {
      theSkill: "CSS",
      theImage: <i class="fab fa-4x fa-css3-alt text-primary mb-4"></i>,
    },
    {
      theSkill: "JavaScript",
      theImage: <i class="fab fa-4x fa-js-square text-primary mb-4"></i>,
    },
    {
      theSkill: "SQL",
      theImage: <i class="fas fa-4x fa-database text-primary mb-4"></i>,
    },
    {
      theSkill: "Bootstrap",
      theImage: <i class="fab  fa-4x fa-bootstrap text-primary mb-4"></i>,
    },
    {
      theSkill: "React",
      theImage: <i class="fab fa-4x fa-react text-primary mb-4"></i>,
    },
    {
      theSkill: "Git/GitHub",
      theImage: <i class="fab  fa-4x fa-github text-primary mb-4"></i>,
    },
  ],
};

let projects = {
  ProjectInfo: [
    {
      name: <h2>Galleria Saves The Planet</h2>,
      description:
        <h5>Game where player moves the main character up and down using the arrow keys to pick up trash off the beach but avoid hitting the Beach Goers</h5>,
      Image: <img src={Test} alt="Galleria Saves The Planet img" />,
    },
    {
      name: <h2>perfectPet🐶</h2>,
      description:
        <h5>Web application using PetFinder API to assist users to adopt pets with special needs</h5>,
      Image: <img src={TestTwo} alt="perfectPet img" />,
    },
  ],
};

const blogPost = {
  post: [
    {title: <h2>Being Non-Binary</h2>,
    author: "Anonymous",
    body: 'Ehh its a Heteronomative World 🤷🏽',
    comments: ['First!', 'Pronouns They/They', 'Heeeeeyyyy, Im NB too!']},
    {title: <h2>Coding Baby!</h2> ,
    author: "Me12543",
    body: 'who really knows how to code though? is it impossible to learn?',
    comments: ['First!', 'yea, idk anything']},
    {
    title: <h2>What am I doing?!</h2>,
    author: "irishCloud69",
    body: 'Do we even know what anyoe is doing here!?',
    comments: ['Facts!📠', 'yea, idk anything', 'life is a simulation']}
  ]
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <img src={Test} alt="" /> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog blog={blogPost.post}/>} />
            <Route path="/blog/*" element={<ChoosenBlog />} />
            <Route
              path="/about"
              element={<About skills={skills.languages} />}
            />
            <Route
              path="/projects"
              element={<Projects projects={projects.ProjectInfo} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
