import { Component } from "react/cjs/react.production.min";
import { Heading  } from "react-bulma-components";


export default class About extends Component{
    render(){
        return(
            <div>
                <Heading mt="6">About me</Heading>
                <div className="blogContainer">
                    <Heading>Christos Miltiadou</Heading>
                    <Heading subtitle>Full-Stack Software Engineer</Heading>
                    <h1>As a chef turned software engineer, I have a particular knack for providing     intuitive and low-impact solutions for the end-user. With my background in the  restaurant industry, I prioritize planning and organization that lead to     thoughtful results, while still being able to think on my feet when necessary. My   goal is to create software that doesn’t burden the user, it allows them to be     their best creative self. </h1>
                </div>
            </div>
        )
    }
}