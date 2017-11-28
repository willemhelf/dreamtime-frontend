import React from 'react'

class DreamShow extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			id: this.props.match.params.id,
			name: "",
			content: "",
			redirect: false
		}
	}

	deleteDream = () => {
		return fetch(`http://localhost:3001/dreams/${this.state.id}`, {
			method: "DELETE"
		}).then(res => console.log(res))
	}	

	componentDidMount() {
		const id = this.props.match.params.id
		fetch(`http://localhost:3001/dreams/${this.state.id}`)
			.then(res => res.json())
			.then(json => this.setState({
				id: id,
				name: json.name,
				content: json.content
			}))
	}

	render() {
		
		return(
			<div>
				<h4>{this.state.name}</h4>
				<p>{this.state.content}</p>
				<button onClick={this.deleteDream}>Delete this dream</button>
			</div>
		)
	}
}

export default DreamShow