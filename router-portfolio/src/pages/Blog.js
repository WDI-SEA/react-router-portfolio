import React, { Component } from 'react'

class Blog extends Component {
	render() {
		let posts = this.props.posts.map((p, i) => {
			return (
				<div key={i}>
					<hr />
					<h3>{p.title}</h3>
					<p className="subtext"><i>{p.body}</i></p>
				</div>
			)
		})
		return (
			<div>
				<div>
					<h1>Check out my blog</h1>
					<div>
						{posts}
					</div>
				</div>
			</div>
		)
	}

}

export default Blog