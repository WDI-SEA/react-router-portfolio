import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <div className="card article">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content has-text-centered">
                                <p className="title article-title">{this.props.title}</p>
                                <div className="tags has-addons level-item">
                                    <span className="tag is-rounded is-info">{this.props.author}</span>
                                    <span className="tag is-rounded">{this.props.date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="content article-body">
                            <p>{this.props.body}</p>
                        </div>
                    </div>
                </div>

                <div className="is-divider"></div>
            </div>
        )
    }
}
