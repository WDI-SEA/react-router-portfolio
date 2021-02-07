import React, { Component } from 'react'

class Posts extends Component{
    render(){
        // console.log(this.props)
        if(!this.props.shortDesc) return <h3>This is not the post you're looking for...</h3>
        return(
            <section>
                <h3>{this.props.shortDesc}</h3>
                <p>{this.props.description}</p>
            </section>
        )
    }
}

export default Posts