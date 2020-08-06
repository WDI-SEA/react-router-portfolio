import React, { Component } from 'react';

const Blog = (props) => {

    let content = props.blogPosts.map((post) => {
        return (
            <div class="card text-white bg-primary my-3 offset-3 col-6">
                <div class="card-body">
                    <p class="card-text">{post}</p>
                </div>
            </div>
        )
    })

        return (
            <div class="row">
                {content}
            </div>
        );
}

export default Blog 