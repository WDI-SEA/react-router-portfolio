import React, { Component } from 'react'


class Blog extends Component {

    state = {
        newPost: [{
            title: '',
            body: ''
        }],
        posts: [{
            title: '',
            body: ''
        }]
    }

    newTitleChange = (e) => {
        this.setState({ newPost:  e.target.value })
        console.log('%%%%%' + this.state.newPost)
    }

    newBodyChange = (e) => {
        this.setState({ newPost: e.target.value })
        console.log('^^^^^' + this.state.newPost)
    }

    addItem = (e) => {
        e.preventDefault()
        let tempBlogArray = this.state.posts
        let tempNewPost = this.state.newPost

        tempBlogArray.push(tempNewPost)

        this.setState({
            posts: tempBlogArray,
            newPost: ''
        })
        console.log('33333 ' + tempBlogArray)
        console.log('****' + this.state.posts)
        console.log('***!!!!!*' + this.state.newPost)

    }




    render() {

        return (
            <div>
                <h1>Blog Spot</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Type your title here"
                        onChange={this.newTitleChange}
                        value={this.state.newPost.title}
                    />
                    <input
                        type="text"
                        placeholder="Type your Blog here"
                        onChange={this.newBodyChange}
                        value={this.state.newPost.body}
                    />
                    <button onClick={this.addItem}>Add it!</button>
                    
                </form>
                <h3>{this.props.title} </h3>
                <p>
                    {this.props.post}
                </p>


            </div>
        )
    }

}


export default Blog