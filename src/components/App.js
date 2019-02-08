import React from 'react'
import Resume from './resume'

const appStyle = {
	height: '100%',
	width: '100%',
}

const appContainerStyle = {
	height : 'auto',
	width: '100%',
	minHeight: '100%',
	margin: 'auto',
	padding: 0,
}

class App extends React.Component {
	render () {
		return (
			<div style={appStyle}>
				<div style={appContainerStyle}>
					<Resume />
				</div>
			</div>
		)
	}
}

export default App
