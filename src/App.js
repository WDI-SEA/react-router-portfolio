// React and CSS import
import React, { Component } from 'react'
import './App.css'

// react-router-dom import
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

// component imports
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Header from './components/partials/Header'


export default class App extends Component {
  render() {
    const posts = [
      {
        title: 'title 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Lobortis scelerisque fermentum dui faucibus in. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Est ante in nibh mauris cursus mattis molestie. Nisl condimentum id venenatis a condimentum vitae. Enim sit amet venenatis urna cursus eget. Laoreet id donec ultrices tincidunt arcu. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Quis auctor elit sed vulputate mi. In dictum non consectetur a erat nam at. Volutpat est velit egestas dui. Auctor neque vitae tempus quam pellentesque. Nec ullamcorper sit amet risus nullam eget felis eget.'
      },
      {
        title: 'title 2',
        body: 'Orci sagittis eu volutpat odio. Dictum fusce ut placerat orci nulla. Sed libero enim sed faucibus turpis in eu mi. Nullam vehicula ipsum a arcu cursus vitae congue. Fames ac turpis egestas integer eget aliquet nibh praesent. Amet cursus sit amet dictum sit amet justo. Ut morbi tincidunt augue interdum velit euismod. In eu mi bibendum neque egestas congue quisque egestas. Ultrices eros in cursus turpis massa tincidunt dui. Tempor orci eu lobortis elementum nibh tellus. Mauris sit amet massa vitae.'
      },
      {
        title: 'title 3',
        body: 'Nisi vitae suscipit tellus mauris a diam maecenas sed. Elit eget gravida cum sociis natoque. Laoreet sit amet cursus sit amet. Ridiculus mus mauris vitae ultricies leo. Commodo nulla facilisi nullam vehicula ipsum a arcu. Ipsum consequat nisl vel pretium lectus. Eu facilisis sed odio morbi quis commodo odio aenean. Mauris sit amet massa vitae tortor. Duis ut diam quam nulla porttitor massa id neque aliquam. Aliquam sem fringilla ut morbi tincidunt augue interdum. Commodo elit at imperdiet dui accumsan. In arcu cursus euismod quis viverra. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Amet justo donec enim diam. Fermentum leo vel orci porta non. Sollicitudin ac orci phasellus egestas tellus.'
      },
      {
        title: 'title 4',
        body: 'Urna id volutpat lacus laoreet. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Ultricies integer quis auctor elit sed vulputate mi. Ipsum dolor sit amet consectetur adipiscing elit. Vitae semper quis lectus nulla. Facilisis magna etiam tempor orci eu. Orci phasellus egestas tellus rutrum tellus. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Et egestas quis ipsum suspendisse ultrices gravida. Habitant morbi tristique senectus et netus et malesuada fames. Convallis tellus id interdum velit laoreet id. Suspendisse faucibus interdum posuere lorem ipsum dolor. Libero id faucibus nisl tincidunt eget nullam non.'
      }
    ]
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
    )
  }
}