import React from 'react'
import Radium from 'radium'

import Paper from 'material-ui/Paper'

import {
	paperStyle
} from '../styles/cardStyles'

import {
	paragraphBottomMarginStyle
} from '../styles/textStyles'

const cardContainer = {
	display: 'flex',
	minWidth: '30%'
	// width: '33%'
}

const cardTopContainer = {
	display: 'flex'
}

class ProjectCard extends React.Component {
	render() {
		return (
			<div style={cardContainer}>
				<Paper style={paperStyle} zDepth={2}>
					<div>
						<h2>{this.props.name}</h2>
					</div>
				</Paper>
			</div>
		)
	}
}

export default Radium(ProjectCard)
