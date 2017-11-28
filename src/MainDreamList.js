import React from 'react'
import DreamShow from './DreamShow'
import { BrowserRouter, NavLink } from 'react-router-dom';

class MainDreamList extends React.Component {

	constructor(props) {
		super(props)

		this.state = ({
			id: this.props.dream.id,
			name: this.props.dream.name,
			content: this.props.dream.content
		})
	}



	render() {
		
		return(
			<div>
			<NavLink to={`/dreams/${this.state.id}`}>{this.state.name}</NavLink>
			<p>{this.state.content} </p>
			<br />
			</div>
		)
	}
}

export default MainDreamList