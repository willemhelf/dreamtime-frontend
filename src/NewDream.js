import React from 'react'

class NewDream extends React.Component {
	constructor() {
		super()
	}

	render() {
		return(
			<div className="new-dream">
			<h3>New dream</h3>
				<textarea placeholder="Describe your dream here..." name="dream" className="dream-text-input">
				</textarea>
				<br />
				<input type="submit" value="Send it off" />
			</div>
		)
	}

}

export default NewDream