import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './partials/Layout'
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'

const allPost = [
  {
    title: 'Week 7 of 12',
    author: 'Anthony Wells',
    body: 'I really wanted to write a blurb about me switching careers and how hard it was learning to code at first vs how easier it has gotten this week. But I have to get this home work done'
  },
  {
    title: 'I need to Budget',
    author: 'Anthony Wells',
    body: 'Since i have started the full time SEIR bootcamp i have had no time and i really need to get to it and sort out my budget. Here i would go into detail about my style of budgeting'
  },
  {
    title: 'The importace of traveling',
    author: 'Anthony Wells',
    body: 'I think traveling is so benificial for every human being. and frankly its a birth right. here i would go into detail about how solo traveling can lead you to healing self descovery and amazing experience. i will also talk about how it can be safe and an opportunity to meet new people. '
  }
]

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route 
            path='/'
            element= {<Home />}
            />
            <Route 
            path='/about'
            element= {<About />}
            />
            <Route 
            path='/blog'
            element= {<Blog
            allPost={allPost}
            />}
            />
            <Route 
            path='/projects'
            element= {<Projects />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
