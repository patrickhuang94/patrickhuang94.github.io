import React from 'react'
import Radium from 'radium'

const footerStyle = {
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	height: '80px',
	backgroundColor: '#1fbdc2',
	'@media screen and (max-width: 599px)': {
		justifyContent: 'center',
	}
}

const footerMargin = {
	marginLeft: '30px',
	'@media screen and (max-width: 599px)': {
		marginLeft: '0px'
	}
}

const textStyle = {
	fontSize: '14px',
	color: 'white'
}

class Footer extends React.Component {
	render() {
		return (
			<div style={footerStyle}>
				<div style={footerMargin}>
					<p style={textStyle}>Copyright © Patrick Huang 2017. All Rights Reserved.</p>
				</div>
			</div>
		)
	}
}

export default Radium(Footer)
