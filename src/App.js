import './App.css';
import {useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/partials/Header.jsx'
import Homepage from './components/pages/Homepage.jsx'
import Blog from './components/pages/Blog.jsx'
import About from './components/pages/About.jsx'
import Projects from './components/pages/Projects.jsx'

const projects = [
  {
    name: 'Stratego', 
    githubLink: 'https://github.com/mitchdmarino/Stratego-mock', 
    deployedLink: 'https://mitchdmarino.github.io/Stratego-mock/',
    imageUrl: 'https://i.imgur.com/o8xCJOc.png'
  },
  {
    name: 'Simplifry', 
    githubLink: 'https://github.com/mitchdmarino/Simplifry', 
    deployedLink: 'https://simplifry.herokuapp.com/',
    imageUrl: 'https://i.imgur.com/U4MuQuX.png'
  }
]
const postArray = [
  {
    title: 'Yummy Treat',
    body: 'Today I had a yummy treat, i think it wuz turkey. very delishus '
  },
  {
    title: 'Fun Walk',
    body: 'Today i wnt on a fun walk and peed everywhere. there waz a nother dog walking near us but I yelled at him and he went away . I protecc the houze'
  },
  {
    title: 'Squirrel',
    body: 'The squirrel is stealing out fruit. He keeps going in to the bakyard. i needz to protecc da houze so plz mr squirrel do nut come back'
  }
]

function App() {
  const [posts, setPosts] = useState(postArray)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }
    const handleCreatePost = (e) => {
        e.preventDefault()
        const newPost = {title: e.target.title.value, body: e.target.body.value}
        let newPosts = [...posts,newPost]
        setPosts(newPosts)
        setTitle('')
        setBody('')
    }

    const handleDeletePost = () => {
  
    }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/blog' 
        element={<Blog posts={posts} 
                        title={title} 
                        body={body}
                        handleTitleChange={handleTitleChange}
                        handleBodyChange={handleBodyChange}
                        handleCreatePost={handleCreatePost}
                        handleDeletePost={handleDeletePost}
                        />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects projects={projects}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
