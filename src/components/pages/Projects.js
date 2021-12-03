import { Component } from "react/cjs/react.production.min";
import { Heading } from 'react-bulma-components'
import Project from "../Project";


export default class Projects extends Component{
    render(){
        let allProjects = this.props.projects.map((p, i)=> {
            return (
            <Project project={p} key={i} />
            
            )
        })
        return(
            <div>
                 <Heading mt="6">My Projects</Heading>
                {allProjects}
            </div>
        )
    }
}