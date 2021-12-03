import React, { Component } from 'react'

export default class Blog extends Component {


    render() {
        let blogTime = this.props.stuff.map((e, i) => {
                return (
                <div key={`container-${i}`}>
                    <h2 key={`title-${i}`}>{e.Title}</h2>
                    <p key={`post-${i}`}>{e.Post}</p>
                </div>
                )
        })

        return (
            <div>
                <h1>Blog</h1>
                {blogTime}
            </div>
        )
    }
}
