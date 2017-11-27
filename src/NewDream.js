import React from 'react'

class NewDream extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			content: "",
			name: ""
		}
	}

	handleNameChange = (e) => {
		e.preventDefault();
		this.setState({
			name: e.target.value
		})
		console.log(this.state.name)
	}

	handleContentChange = (e) => {
		e.preventDefault()
		this.setState({
			content: e.target.value
		})
		console.log(this.state.content)
	}

	makePostRequest = (e) => {
		fetch("http://localhost:3001/dreams", {
			method: "post",
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				content: this.state.content
			})
		}).then((res) => {
			console.log(res)
		})
	}

	render() {
		return(
			<div className="new-dream">
			<h3>New dream</h3>
				<textarea placeholder="Name your dream" name="dream-name" onChange={this.handleNameChange} className="dream-name-input"></textarea> <br /> <br />
				<textarea placeholder="Describe your dream here..." name="dream" className="dream-text-input" onChange={this.handleContentChange}>
				</textarea>
				<br />
				<input type="submit" value="Send it off" onClick={this.makePostRequest}/>
			</div>
		)
	}

}

export default NewDream