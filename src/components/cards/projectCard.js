import React from 'react'
import Radium from 'radium'

import Paper from 'material-ui/Paper'

import {
	cardTopContainer,
	paperStyle
} from '../styles/cardStyles'

import {
	marginTopStyle,
	paragraphBottomMarginStyle
} from '../styles/textStyles'

const cardContainer = {
	display: 'flex',
	width: '100%'
}

const cardHeight = {
	height: '150px'
}

const nameAndDescriptionContainer = {
	display: 'flex',
	flexDirection: 'column'
}

const customPaperStyle = {
	...paperStyle,
	maxWidth: '300px'
}

class ProjectCard extends React.Component {
	render() {
		return (
			<div style={cardContainer}>
				<Paper style={customPaperStyle} zDepth={2}>
					<div style={cardTopContainer}>
						<div style={nameAndDescriptionContainer}>
							<h2>{this.props.name}</h2>
							<p style={marginTopStyle}>{this.props.description}</p>
						</div>
					</div>
				</Paper>
			</div>
		)
	}
}

export default Radium(ProjectCard)
