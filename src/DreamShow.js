import React from 'react'
import { Route, Redirect } from 'react-router'
import { withRouter, NavLink } from 'react-router-dom'
import Modal from "react-modal"


class DreamShow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.match.params.id,
			editing: false,
			name: this.props.name,
			content: this.props.content,
			modalIsOpen: false
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


	setEditToggle = () => {
		console.log("edit toggled")
		if (this.setState.editing === true) {
			this.setState({ editing: false})
		} else if (this.state.editing === false ){
			this.setState({editing: true })
		}
	}
	

	editContent = (e) => {
		this.setState({
			content: e.target.value
		})
		console.log(this.props)
		return (`http://localhost:3001/dreams/${this.state.content}`, {
	      method: "PUT",
	      headers: new Headers({
        'Content-Type': 'application/json'
      		}),
	      body: JSON.stringify( { content: e.target.value } )
	    })
	}

	handleContentChange = (e) => {
		e.preventDefault()
		this.setState({
			content: e.target.value
		})
		console.log(this.state.content)
	}

	handleNameChange = (e) => {
		e.preventDefault();
		this.setState({
			name: e.target.value
		})
		console.log(this.state.name)
	}

	// openModal = () =>{
	// 	this.setState({
	// 		modalIsOpen: true
	// 	})
	// }

	// closeModal = () =>{
	// 	this.setState({
	// 		modalIsOpen: false
	// 	})
	// }



	render() {

			return(
				<div>
					<h4>{this.state.name}</h4>
					<p>{this.state.content}</p>
					<br /><br />
					<button onClick={this.deleteAndRedirect}>Delete this dream</button><br />
					<button onClick={this.setEditToggle}>Edit this dream</button>
					<br />
					{this.state.editing === true ? <div><textarea placeholder="Name" onChange={this.handleNameChange}></textarea><br /><textarea placeholder="content"></textarea><br /><button onClick={this.editContent}>send it off</button></div> : <div></div>}
					<br /> <br />
					<NavLink to={"/"}> ← Back</NavLink>
				</div>
			)
	}

}

export default withRouter(DreamShow) 