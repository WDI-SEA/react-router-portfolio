// Nav.js

import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class Nav extends Component {
	render() {
		return(
			<ul className="navList">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/Blog">Blog</Link>
				</li>
				<li>
					<Link to="About">About</Link>
				</li>
				<li>
					<Link to="Projects">Projects</Link>
				</li>
			</ul>
		)
	}
}

export default Nav;