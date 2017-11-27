import React from 'react'

class DreamShow extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const id = this.props.match.params.id
		fetch("http://localhost:3001/dreams" + id)
			.then(res => res.json)
			.then(json => console.log(json))
	}

	render() {
		return(
			<p>hello, I'm a dream show page :)</p>

		)
	}
}

export default DreamShow