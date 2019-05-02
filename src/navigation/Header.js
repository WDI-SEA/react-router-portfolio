// Header.js

import React, { Component } from 'react'
import logo from '../cropped-Ninja_Old_Header.png';

class Header extends Component {
	render() {
		return(
			<div className="header">
				<img className ="headerLogo" src={logo} alt="logo" />
			</div>
		)
	}
}

export default Header;