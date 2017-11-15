import React from 'react'
import Radium from 'radium'

import Paper from 'material-ui/Paper'
import LocationIcon from 'material-ui/svg-icons/communication/location-on'

import {
	cardContainer,
	cardTopContainer,
	titleAndRoleContainer,
	marginTopStyle,
	descriptionContainer,
	hideWhenSmall,
	iconStyle,
	iconAndLocationContainer,
	iconAndLocationStyle,
	tagsContainer,
	tagStyle
} from '../styles/experienceStyles'

import {
	paperStyle
} from '../styles/cardStyles'

import {
	paragraphBottomMarginStyle
} from '../styles/textStyles'

const customPaperStyle = {
	...paperStyle,
	padding: '25px'
}

class ExperienceCard extends React.Component {
	render() {
		return (
			<div style={cardContainer}>
				<Paper style={customPaperStyle} zDepth={2}>
					<div style={cardTopContainer}>
						<div style={titleAndRoleContainer}>
							<h2>{this.props.name}</h2>
							<h4 style={marginTopStyle}>{this.props.title}</h4>
							<h4 style={marginTopStyle}>{this.props.duration}</h4>
						</div>

						<div style={iconAndLocationContainer}>
							<h2 style={iconAndLocationStyle}>
								<span style={hideWhenSmall}>
									<LocationIcon style={iconStyle} color='#7f8284' preserveAspectRatio='none' />
								</span>
								{this.props.location}
							</h2>
						</div>
					</div>

					<div style={descriptionContainer}>
						<p style={paragraphBottomMarginStyle}>
							{this.props.description}
						</p>

						<div style={tagsContainer}>
							{this.props.tags.map((tag) => {
								return (
									<p style={tagStyle}>{tag}</p>
								)
							})}
						</div>
					</div>
				</Paper>
			</div>
		)
	}
}

export default Radium(ExperienceCard)
