import React from 'react'

const landingContainer = {
	// height: '300px',
	backgroundColor: '#7f8284'
}

const titleContainer = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%'
}

const titleStyle = {
	margin: '0',
	fontSize: '28px',
	fontWeight: '300'
}

const subtitleStyle = {
	marginTop: '10px',
	marginBottom: '0',
	fontSize: '20px',
	fontWeight: '300'
}

class Landing extends React.Component {
	render() {
		return (
			<div style={landingContainer}>
				<div style={titleContainer}>
					<h3 style={titleStyle}>Patrick Huang</h3>
					<h4 style={subtitleStyle}>Software Engineer</h4>
				</div>
			</div>
		)
	}
}

export default Landing
