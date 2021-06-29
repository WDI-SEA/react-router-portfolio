import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { Blog } from './components/Blog'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Header } from './components/Header'

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route
                        exact path="/"
                        component={Home}
                    />
                    <Route
                        path="/blog"
                        component={Blog}
                    />
                    <Route
                        path="/about"
                        component={About}
                    />
                    <Route
                        path="/projects"
                        component={Projects}
                    />
                </Switch>
                
            </main>
        </BrowserRouter>
    )
}