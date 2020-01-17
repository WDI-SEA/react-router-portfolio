
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

const Project = props => {
    const classes = useStyles()
    return (
        <Card className="card">
            <CardHeader 
                title={props.project.title} 
                subheader={props.project.technologies}  
            />
            <CardContent>
                <img src={props.project.image}/>
                <p>{props.project.description}</p>

            </CardContent>
            <CardActions className="center">
                <Link href={props.project.link}>
                    Click to see live
                </Link>
            </CardActions>
        </Card>
    )
}

export default Project