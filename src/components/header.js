import React from 'react'
import { Link } from 'react-router-dom'

const headerStyle = {
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	height: '70px',
	backgroundColor: '#1FBDC2'
}

const headerTitleStyle = {
	margin: '0px 30px 0px 15px',
	color: 'white',
	fontWeight: '300'
}

class Header extends React.Component {
	render() {
		return (
			<div style={headerStyle}>
				<a style={headerTitleStyle}>About</a>
				<a style={headerTitleStyle}>Contact</a>
				<a style={headerTitleStyle}>Portfolio</a>
			</div>
		)
	}
}

export default Header
