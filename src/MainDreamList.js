import React from 'react'
import DreamShow from './DreamShow'
import { BrowserRouter, NavLink } from 'react-router-dom';

class MainDreamList extends React.Component {

	constructor(props) {
		super(props)

		
	}



	render() {
		
		return(
			<div className="dream-container">
			<NavLink to={`/dreams/${this.props.dream.id}`} className="dream-link">{this.props.dream.name}</NavLink>
			<p>{this.props.dream.content} </p>
			</div>
		)
	}
}

export default MainDreamList