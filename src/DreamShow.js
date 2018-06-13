import React from 'react'
import { Route, Redirect } from 'react-router'
import { withRouter, NavLink } from 'react-router-dom'
import DreamEdit from "./DreamEdit"
import Popup from "reactjs-popup";


class DreamShow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.match.params.id
		}
	}

	componentDidMount() {
		fetch(`http://localhost:3001/dreams/${this.state.id}`)
			.then(res => res.json())
			.then(json => this.setState({
				id: this.state.id,
				name: json.name,
				content: json.content
			}))
	}

  deleteAndRedirect = () => {
		console.log("deleting")
	    return fetch(`http://localhost:3001/dreams/${this.state.id}`, {
	      method: "DELETE",
	      headers: {
	      	Accept: "application/json",
	      	'Content-type': 'application/json'
	      }
	    }).then(res => this.props.history.push('/'))
	    		
	}



	render() {

			return(
				<div>
					<h4>{this.state.name}</h4>
					<p>{this.state.content}</p>
					<NavLink to={`/edit/${this.state.id}`}><button>Edit</button></NavLink>
					<br /><br />
					<button onClick={this.deleteAndRedirect}>Delete this dream</button><br />
					<br /> <br />
					<NavLink to={"/"}> ← Back</NavLink>
				</div>
			)
	}

}

export default withRouter(DreamShow) 