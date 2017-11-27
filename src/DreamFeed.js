import React from 'react';
import MainDreamList from './MainDreamList'
import DreamShow from './DreamShow'
import { Route } from 'react-router-dom';

class DreamFeed extends React.Component {

	constructor() {
		super()

		this.state = {
			dreams: []
		}
	}

	componentDidMount() {
		fetch("http://localhost:3001/dreams")
			.then(res => res.json())
			.then(json => this.setState({
				dreams: json
			}))
	}

	render() {
		return(
			<div>
			{this.state.dreams.map((dream, id) => {
				return <MainDreamList dream={dream} key={id} />
			})}
			</div>
		)
	}

}

export default DreamFeed