import React, { Component } from 'react'

class Projects extends Component {
	render() {
		let projects = this.props.projects.map((p, i) => {
			return (
				<div key={i}>
					<hr />
					<h3>{p}</h3>
				</div>
			)
		})
		return (
			<div>
				<div>
					<h1>Check out my projects</h1>
					<div>
						{projects}
					</div>
				</div>
			</div>
		)
	}

}

export default Projects