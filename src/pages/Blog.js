// Blog.js

import React, { Component } from 'react'


class Blog extends Component {
	render() {
		let posts = this.props.posts.map((stuff, i) =>{
			return(
				<li className="card" key={i}>
					<h3>{stuff.title}</h3>
					<hr />
					<p>{stuff.content}</p>
				</li>
			)

		})
		return (
			<div>
				<ul>
					{posts}
				</ul>
			</div>
		)
	}
}

export default Blog;