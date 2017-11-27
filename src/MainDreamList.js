import React from 'react'

const MainDreamList = (props) => {

	return(
		<div>
		<h4>{props.dream.name}</h4>
		<p>{props.dream.content} </p>
		<br />
		</div>
	)
}

export default MainDreamList