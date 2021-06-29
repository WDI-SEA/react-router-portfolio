import React from "react"
import {Route, Link} from 'react-router-dom'
import About from './Components/About'
import Blog from './Components/Blog'
import Homepage from './Components/Homepage'
import Projects from './Components/Projects'
import './App.css';

const blogData = [
  { title: "this is BLOG post number one",
    body: "their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  { title: "And another post",
  body: "five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
  { title: "Tuesday Evening",
  body: "into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
  { title: "European Trip",
  body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
},
]

const projectsData = [
  {
    title: "Current Projects",
    date: "Jan 2, 2020",
    photo: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    desc: "public photos five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: "Black and White Projects",
    date: "Feb 21, 2020",
    photo: "https://cdn.digitalphotopro.com/2017/07/tombol-bwconversions-2-683x1024.jpg",
    desc: "the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with "
  },
  {
    title: "Color Portfolio",
    date: "Mar 25, 2020",
    photo: "https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: "public photos five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: "Landscape Photos",
    date: "Nov 12, 2020",
    photo: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg",
    desc: "containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
]

function App() {
  return (
    <div className="App">
    <h1>My Portfolio</h1>
<hr/>
    <nav>
      <ul>
        <li>
          <Link to="/">
            HOMEPAGE
          </Link>
        </li>
        <li>
        <Link to="/blog">
            BLOG
          </Link>
        </li>
        <li>
        <Link to="/about">
            ABOUT
          </Link>
        </li>
        <li>
        <Link to="/projects">
            PROJECTS
          </Link>
        </li>
      </ul>
    </nav>
    <hr/>
    <Route exact path="/" component={Homepage} />
    <Route path="/about" component={About} />
    <Route path="/blog" render={props => {
      return <Blog blogData={blogData} />
    }}  />
    <Route path="/projects" render={props => {
      return <Projects projectsData={projectsData} />
    }}  />

    </div>
  );
}

export default App;
