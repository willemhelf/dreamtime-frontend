import React from "react";
import DreamShow from "./DreamShow"

class DreamEdit extends React.Component {
	constructor(props) {
		super(props)
	}


	consoleLogger = () => {
		console.log(this.props)
	}

	render() {
		return(
			<div onClick={this.consoleLogger}>hi</div>
		)
	}

}

export default DreamEdit