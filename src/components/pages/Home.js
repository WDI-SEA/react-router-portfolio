import { Component } from "react/cjs/react.production.min";
import Post from "../Post";
import { Heading } from 'react-bulma-components'
import Project from "../Project";


export default class Home extends Component{
    render(){
        let post = this.props.posts[this.props.posts.length -1]
        let project = this.props.projects[this.props.projects.length -1]
        return(
            <div>
                 <Heading mt="6">My latest post:</Heading>
                <Post post={post}/>

                <Heading mt="6">My latest project:</Heading>
                <Project project={project}/>
            </div>
        )
    }
}