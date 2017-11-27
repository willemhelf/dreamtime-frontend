import React from 'react'

const MainDreamList = (props) => {

	return(
		<div>
		<p>{props.dream.name}</p>
		<p>{props.dream.content} </p>
		<br />
		</div>
	)
}

export default MainDreamList