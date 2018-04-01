import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
	constructor() {
		super()
	}

	render() {
		return(
			<div className="nav-bar">
			<NavLink to="/">HOME</NavLink>
			<br />
			<NavLink to="/new">NEW</NavLink>
			<br />
			<br />
			</div>
		)
	}
}

export default Navbar