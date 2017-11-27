import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
	constructor() {
		super()
	}

	render() {
		return(
			<div>
			<NavLink to="/">Home</NavLink>
			<br />
			<NavLink to="/new">New</NavLink>

			</div>
		)
	}
}

export default Navbar