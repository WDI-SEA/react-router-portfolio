import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        let allPosts = this.props.posts.map((t) =>{
            return (
                <ul className='posts'>
                    <li>{t.title}</li> 
                    <li>{t.body}</li>
                </ul>
            )
        })
        return(
            <div>
                <h2>Blog</h2>
                {allPosts}
            </div>
        )
    }
}