import React, { Component } from 'react'
import Post from '../partials/Post'

export default class Blog extends Component {
    render() {

        let allPosts = this.props.posts.map((article)=>{
            return <Post title={article.title} author={article.author} body={article.body} date={article.date} />
        })
        return (
            <div className="container blog-container">
            <section className="articles">
                <div className="column is-8 is-offset-2">
                    {allPosts}
                </div>
            </section>
        </div>
        )
    }
}
