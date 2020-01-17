import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const BlogPost = props => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <Paper className="post-paper" elevation={3}>
                    <h3>{props.post.title}</h3>
                    <small>Posted {props.post.createdAt}</small>
                    <p>{props.post.body}</p>
                </Paper>     
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    )
}

export default BlogPost