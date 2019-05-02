import React, { Component } from 'react'

class About extends Component {
	render() {
		let skills = this.props.lnf.map((s, i) => {
			return (
				<div key={i}>
					<hr />
					<p>{s}</p>
				</div>
			)
		})
		return (
			<div>
				<div>
					<h1>Check out my skills</h1>
					<h3>Languages & Frameworks:</h3>
					<div>
						{skills}
					</div>
				</div>
			</div>
		)
	}
}

export default About