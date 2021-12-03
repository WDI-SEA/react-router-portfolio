import { Component } from "react/cjs/react.production.min";
import Post from "../Post";
import { Heading } from 'react-bulma-components'





export default class Blog extends Component{
    render(){
        let allPosts = this.props.posts.map((p, i)=> {
            return (
            <Post post={p} key={i} />
            
            )
        })
        return(
            <div>
                 <Heading mt="6">Blogs</Heading>
                <h3></h3>
                {allPosts}
            </div>
        )
    }
}