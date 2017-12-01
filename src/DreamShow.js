import React from 'react'
import { Route, Redirect } from 'react-router'

class DreamShow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.match.params.id,
			dreams: []
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


	render() {



		console.log(this.props)

		if (this.props.redirect === true) {
			return (
				<Redirect to="/" />
			)
		} else  {
		
			return(
				<div>
					<h4>{this.state.name}</h4>
					<p>{this.state.content}</p>
					<button onClick={this.deleteAndRedirect}>Delete this dream</button>
				</div>
			)
		}
	}

}

export default DreamShow