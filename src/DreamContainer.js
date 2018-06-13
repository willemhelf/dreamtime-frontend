import React from 'react';
import MainDreamList from './MainDreamList'
import DreamShow from './DreamShow'
import DreamEdit from "./DreamEdit"
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

class DreamFeed extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			dreams: [],
			name: "",
			content: "", 
			id: null
		}
	}

	componentDidMount() {
		fetch("http://localhost:3001/dreams")
			.then(res => res.json())
			.then(json => this.setState({
				dreams: json,
				content: json.content,
				name: json.name,
				id: json.id
			})) 
	}


	render() {


		return(
			<div className="dream-list-container">
			
			{this.state.dreams.map((dream, id) => {
				return <MainDreamList dream={dream} key={id} deleteAndRedirect={this.props.deleteAndRedirect}/>
			})}
			</div>
		)
	}

}

export default DreamFeed