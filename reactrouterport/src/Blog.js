import React from 'react'


const Blog = (props) => {

    return (
        <div>
            <h2> Blog ! </h2>
            <h2>Create a new post</h2>
                <div class="login-page">
                <div id="form">
                    <form action="/articles" method="POST" />
                        <div id="form-group" >
                            <label for="title">Title </label>
                            <input type="text" class="form-control" id="title" name="title" required />
                        </div>

                        <div id="form-group">
                            <label for="content">Content</label>
                            <textarea type="text" class="form-control" id="content" name="content" required></textarea>
                        </div>
                        <input type="submit" id="btn" />
                    <form/> 
                </div>
                </div>
        </div>
    )
}


export default Blog;