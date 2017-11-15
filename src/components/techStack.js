import React from 'react'
import Radium from 'radium'

import {
	sectionTitleContainer,
	sectionWidthContainer
} from './styles/sharedStyles'

import {
	centerAlignTextStyle,
	keywordStyle
} from './styles/textStyles'

import FrontendIcon from 'material-ui/svg-icons/editor/mode-edit'
import BackendIcon from 'material-ui/svg-icons/action/code'

const stackContainer = {
	display: 'flex',
	justifyContent: 'center',
	padding: '30px 0px',
	width: '100%',
	background: 'white'
}

const devStackContainer = {
	display: 'flex',
	flexDirection: 'column',
	margin: '15px 0px 0px 0px',
	width: '100%'
}

const codeIconContainer = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '0px 15px 0px 0px',
	'@media screen and (max-width: 649px)': {
		margin: '0px 0px 15px 0px'
	}
}

const codeIconStyle = {
	height: '35px',
	width: '35px',
}

const customSectionTitleContainer = {
	...sectionTitleContainer,
	marginBottom: '20px'
}

const frontendContainer = {
	width: '100%',
	marginBottom: '15px'
}

const backendContainer = {
	width: '100%'
}

const subheaderStyle = {
	lineHeight: '28px'
}

class TechStack extends React.Component {
	render() {
		return (
			<div style={stackContainer}>
				<div style={sectionWidthContainer}>
					<div style={devStackContainer}>
						<div style={frontendContainer}>
							<div style={customSectionTitleContainer}>
								<span style={codeIconContainer}><FrontendIcon style={codeIconStyle} /></span>
								<h1 style={centerAlignTextStyle}>Front-end Development</h1>
							</div>
							<h3 style={subheaderStyle}>I specialize in <span style={keywordStyle}>React</span> applications. My expertise in front-end development includes:</h3>
							<ul>
								<li>
									Creating responsive client-side web applications with
									Flexbox and Radium
								</li>
								<li>
									Maintaining state management with Redux
								</li>
								<li>
									Using higher-order components to increase
									code reusability
								</li>
								<li>
									Extensive usage of ES6 destructuring, arrow functions and promises
								</li>
								<li>
									Generating responsive email templates with Foundation for Email
								</li>
							</ul>
						</div>

						<div style={backendContainer}>
							<div style={customSectionTitleContainer}>
								<span style={codeIconContainer}><BackendIcon style={codeIconStyle} /></span>
								<h1 style={centerAlignTextStyle}>Back-end Development</h1>
							</div>
							<h3 style={subheaderStyle}>I work with <span style={keywordStyle}>Node.js</span>. My proficiency with back-end development includes:</h3>
							<ul>
								<li>
									Developing backend services using RESTful architecture and Promises
								</li>
								<li>
									Basic knowledge of cloud storage services (Amazon S3) and databases (MySQL)
								</li>
								<li>
									Integration of third party API services (Facebook, Twitter, Network for Good)
								</li>
								<li>
									Performing integration testing with Mocha, Sinon and Chai
								</li>
								<li>
									Deploying application to server with Git and Jenkins
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Radium(TechStack)
