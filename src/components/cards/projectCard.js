import React from 'react'
import Radium from 'radium'

import Paper from 'material-ui/Paper'

import {
	cardContainer,
	paperStyle
} from '../styles/cardStyles'

import {
	cardTopContainer
} from '../styles/experienceStyles'

import {
	paragraphBottomMarginStyle
} from '../styles/textStyles'

const cardHeight = {
	height: '150px'
}

class ProjectCard extends React.Component {
	render() {
		return (
			<div style={cardContainer}>
				<Paper style={paperStyle} zDepth={2}>
					<div style={cardTopContainer}>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<h2>{this.props.name}</h2>
							<h4>{this.props.description}</h4>
						</div>
					</div>
				</Paper>
			</div>
		)
	}
}

export default Radium(ProjectCard)
