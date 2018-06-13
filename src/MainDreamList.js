import React from 'react'
import DreamShow from './DreamShow'
import DreamEdit from "./DreamEdit"
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

class MainDreamList extends React.Component {

	constructor(props) {
		super(props)
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

			<div className="dream-container">
			<Route path='/dreams/:id' render={(props) => <DreamShow {...props} dreams={this.state.dreams} deleteAndRedirect={this.deleteAndRedirect}/> } />
				<NavLink to={`/dreams/${this.props.dream.id}`} className="dream-link" >{this.props.dream.name}</NavLink>
				<p>{this.props.dream.content} </p>
			</div>
		)
	}
}

export default MainDreamList