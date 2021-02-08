import React, { Component } from 'react';

class Article extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.publication_date}</h3>
            </div>
        )
    }
}

export default Article;