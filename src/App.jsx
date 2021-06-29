import './App.css'
import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { Blog } from './components/Blog'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Header } from './components/Header'
import { BlogPost } from './components/BlogPost'

import { PostArray } from './data/PostArray'
import { ProjectArray } from './data/ProjectArray'

export const App = () => {
    const [Post] = useState(PostArray)

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
                        exact path="/blog"
                        render={() => <Blog postArray={PostArray}/>}
                    />
                    <Route
                        path="/blog/:id"
                        render={props => {
                            const indivPost = Post.find(e => e.id.toString() === props.match.params.id)
                            props = {...props, ...indivPost}
                            console.log(indivPost)
                            return <BlogPost {...props} />
                        }}
                    />
                    <Route
                        path="/about"
                        component={About}
                    />
                    <Route
                        path="/projects"
                        render={() => <Projects projectArray={ProjectArray}/>}
                    />
                </Switch>
            </main>
        </BrowserRouter>
    )
}