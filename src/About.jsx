import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const About = props => {
    return (
        <div>

            <h1>More about {props.name.first}</h1>
            <p>This page tells you more about me and the work I've been doing.</p>
            <Grid container spacing={3}>
                <Grid item xs={2} />
                <Grid item xs={4}>
                    <Link className="link" to="/blog"><Button variant="contained" color="secondary">See my latest blog post from {props.posts[props.posts.length-1].createdAt}</Button></Link>
                </Grid>
                <Grid item xs={4}>
                    <Link className="link" to="/projects"><Button variant="contained" color="secondary">See my latest project: {props.projects[props.projects.length-1].title}</Button></Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default About