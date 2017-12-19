import React from 'react'
import Radium from 'radium'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import {
	cardTopContainer,
	paperStyle
} from '../styles/cardStyles'

import {
	marginTopStyle
} from '../styles/textStyles'

const cardContainer = {
	display: 'flex',
	width: '100%',
	'@media screen and (max-width: 649px)': {
		margin: '0px 0px 30px 0px'
	}
}

const nameAndDescriptionContainer = {
	display: 'flex',
	flexDirection: 'column'
}

const buttonColor = {
	color: 'white'
}

const buttonStyle = {
	marginTop: '15px'
}

class ProjectCard extends React.Component {
	render() {
		if (this.props.isLeftCard) {
			cardContainer.marginRight = '30px'
		} else {
			cardContainer.marginRight = '0px'
		}

		return (
			<div style={cardContainer}>
				<Paper style={paperStyle} zDepth={2}>
					<div style={cardTopContainer}>
						<div style={nameAndDescriptionContainer}>
							<h2>{this.props.name}</h2>
							<p style={marginTopStyle}>{this.props.description}</p>
						</div>
					</div>
					<div>
						<a href={this.props.githubUrl} target="_blank">
							<RaisedButton
								label="Github"
								labelColor="white"
								buttonStyle={buttonColor}
								style={buttonStyle}
								backgroundColor="#1fbdc2"
							/>
						</a>
					</div>
				</Paper>
			</div>
		)
	}
}

export default Radium(ProjectCard)
