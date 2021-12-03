import React, { Component } from "react"
import { Heading  } from "react-bulma-components";

class Post extends Component {
    render (){
        return (
            <div className="blogContainer">
                <div>
                <Heading>{this.props.post.title}</Heading>
                <Heading subtitle>{this.props.post.subTitle}</Heading>
                </div>
                <br/>
                <p>{this.props.post.content}</p>
            </div>
        )
    }

}

export default Post