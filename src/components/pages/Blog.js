import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        let allPosts = this.props.posts.map((t) =>{
            return (
                <div className='posts'>
                    <h3>{t.title}</h3>
                    <small>{t.by}</small>
                    <p>{t.body}</p>
                </div>
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