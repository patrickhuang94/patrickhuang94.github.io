import React from 'react'
import Radium from 'radium'

import Paper from 'material-ui/Paper'

import {
	sectionWidthContainer,
	sectionTitleContainer
} from './styles/sharedStyles'

import {
	cardContainer,
	paperStyle
} from './styles/cardStyles'

import FrontendIcon from 'material-ui/svg-icons/editor/mode-edit'
import BackendIcon from 'material-ui/svg-icons/action/code'

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		paddingTop: 30,
		width: '100%'
	},
	cardStyle: {
		padding: 25,
		marginLeft: 25,
		marginRight: 25,
		marginBottom: 35,
		width: '700px'
	},
	sectionTitle: {
		width: '100%',
		marginBottom: 20,
		marginLeft: 40
	},
	title: {
		display: 'flex',
		marginBottom: 20,
		fontSize: 24,
	},
	subtitleContainer: {
		lineHeight: '24px'
	},
	headingStyle: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: 26
	},
	iconContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 15,
		'@media screen and (max-width: 649px)': {
			margin: '0px 0px 15px 0px'
		}
	},
	icon: {
		height: '28px',
		width: '28px',
	},
	subheaderStyle: {
		lineHeight: '28px'
	},
	keyword: {
		fontWeight: '500',
		color: '#1FBDC2'
	}
}

class TechStack extends React.Component {

	renderBackendContainer () {

		return (
			<div style={cardContainer}>
				<Paper style={paperStyle} zDepth={2}>
					<div style={styles.title}>
						<span style={styles.iconContainer}><BackendIcon style={styles.icon} /></span>
						<p style={styles.headingStyle}>Back-end Development</p>
					</div>
					<div style={styles.subtitleContainer}>I work with <span style={styles.keyword}>Node.js</span>. My proficiency with back-end development includes:</div>
					<ul>
						<li>Developing backend services using RESTful architecture</li>
						<li>Integration of third party API services (Facebook, Twitter, and Instagram)</li>
						<li>Basic knowledge of cloud storage services (Amazon S3) and databases (MySQL)</li>
						<li>Performing integration testing with Mocha, Sinon and Chai</li>
					</ul>
				</Paper>
			</div>
		)
	}

	renderFrontendContainer () {

		return (
			<div style={cardContainer}>
				<Paper style={paperStyle} zDepth={2}>
					<div style={styles.title}>
						<span style={styles.iconContainer}><FrontendIcon style={styles.icon} /></span>
						<p style={styles.headingStyle}>Front-end Development</p>
					</div>
					<div style={styles.subtitleContainer}>I work with <span style={styles.keyword}>React</span>. My expertise with front-end development includes:</div>
					<ul>
						<li>Creating responsive web applications using layout frameworks (Flexbox, Radium)</li>
						<li>Maintaining state management with Redux and Reselect</li>
						<li>Developing React Native applications</li>
						<li>Increasing code reusability with higher-order components</li>
					</ul>
				</Paper>
			</div>
		)
	}

	render () {

		return (
			<div style={styles.container}>
				<div style={sectionWidthContainer}>
					{this.renderFrontendContainer()}
					{this.renderBackendContainer()}
				</div>
			</div>
		)
	}
}

export default Radium(TechStack)
