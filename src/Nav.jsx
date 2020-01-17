import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Nav = props => {
    return (
            <AppBar className="nav">
                <Toolbar>
                    <Typography>
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/about">About</Link>
                        <Link className="link" to="/blog">Blog</Link>
                        <Link className="link" to="/projects">Projects</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default Nav