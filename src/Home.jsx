import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = props => {
    return (
        <div>
            <h1>{props.name.first} {props.name.last}</h1>
            <Link className="home-links" to="/about">Learn more about me</Link>
            <p>I'm a super interesting person.</p>
            <Link className="home-links" to="/blog">Check out my latest blog post</Link>
            <p>{props.posts[0].title} ({props.posts[0].createdAt})</p>
            <Link className="home-links" to="/Projects">Take a peek at my projects</Link>
            <p>See what I've been up to lately</p>

        </div>

    )
}

export default Home