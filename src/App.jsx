import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { Blog } from './components/Blog'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Header } from './components/Header'

export const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <Blog />
            <About />
            <Projects />
        </div>
    )
}