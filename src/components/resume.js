import React from 'react'
import Radium from 'radium'
import Paper from '@material-ui/core/Paper'

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'linear-gradient(#1FBDC2 60%, #FFFFFF 40%)',
		marginBottom: 50,
		width: '100%',
	},
	paper: {
		width: '80%',
		marginTop: 50,
	},
	paperMobileView: {
		width: '90%',
		marginTop: 50,
	},
	paperWrapper: {
		padding: '30px 30px 0px 30px',
	},
	socialIconsContainer: {
		backgroundColor: '#1FBDC2',
		display: 'flex',
		justifyContent: 'center',
		height: 60,
	},
	outerIconStyle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
		textDecoration: 'none',
	},
	iconStyle: {
		fontSize: '22px',
		margin: '0px 20px',
		color: 'white',
	},
	name: {
		fontSize: 42,
		marginBottom: 10,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		fontStyle: 'italic',
	},
	sectionContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 4fr',
		columnGap: '50px',
		marginTop: 20,
		marginBottom: 20,
		'@media screen and (max-width : 899px)': {
			display: 'flex',
			flexDirection: 'column',
		},
	},
	sectionHeader: {
		fontSize: 24,
		'@media screen and (max-width : 899px)': {
			marginBottom: 12,
		},
	},
	sectionContent: {
		display: 'grid',
		marginTop: 4,
	},
	skillsSectionContent: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(85px, auto))',
		marginTop: 4,
	},
	skillItem: {
		marginRight: 20,
		marginBottom: 10,
	},
	experienceContainer: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 10,
		width: '100%',
	},
	contractCompanyContainer: {
		marginTop: 8,
		marginLeft: 30,
	},
	experienceHeaderContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 5,
		marginTop: 5,
		'@media screen and (max-width : 649px)': {
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	},
	experienceTitle: {
		fontSize: 19,
		fontWeight: 700,
	},
	experienceClientTitle: {
		fontSize: 18,
		marginTop: 5,
	},
	experienceRole: {
		fontSize: 15,
	},
	experienceTimeline: {
		fontSize: 15,
		fontStyle: 'italic',
		'@media screen and (max-width : 649px)': {
			marginTop: 6,
			marginBottom: 6,
		},
	},
	experienceContent: {
		maxWidth: '92%',
		marginTop: 15,
		marginBottom: 15,
		lineHeight: 1.4,
	},
	projectTitle: {
		fontSize: 19,
		fontWeight: 700,
	},
	projectContent: {
		maxWidth: '92%',
		marginTop: 15,
		marginBottom: 15,
		lineHeight: 1.4,
	},
	educationTitle: {
		fontSize: 19,
		marginBottom: 10,
		fontWeight: 700,
	},
	educationMajor: {
		fontSize: 15,
		marginBottom: 18,
	},
	reactRedditImage: {
		width: 320,
		height: 180,
		marginBottom: 24,
		'@media screen and (max-width : 649px)': {
			width: 240,
			height: 150,
		},
	},
	line: {
		borderBottom: '1px solid #CCCCCC',
		width: '100%',
	}
}

class Resume extends React.Component {
	state = {
		windowWidth: window.innerWidth,
	}
	
	componentDidMount () {
		this.updateWindowDimensions()
		window.addEventListener('resize', this.updateWindowDimensions)
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

	updateWindowDimensions = () => {
		this.setState({
			windowWidth: window.innerWidth,
		})
	}

	renderSocialIcons () {
		return (
			<div style={styles.socialIconsContainer}>
				<a href="https://www.linkedin.com/in/patrickhhuang/" target="_blank" style={styles.outerIconStyle} key={1} rel="noopener noreferrer">
					<i class="fa fa-linkedin" style={styles.iconStyle} key={1}></i>
				</a>
				<a href="https://github.com/patrickhuang94" target="_blank" style={styles.outerIconStyle} key={2} rel="noopener noreferrer">
					<i class="fa fa-github" style={styles.iconStyle} key={2}></i>
				</a>
				<a href="https://stackoverflow.com/users/2557256/patrickhuang94" target="_blank" style={styles.outerIconStyle} key={3} rel="noopener noreferrer">
					<i class="fa fa-stack-overflow" style={styles.iconStyle} key={3}></i>
				</a>
				<a href="mailto:patrickhuang94@gmail.com" target="_top" style={styles.outerIconStyle} key={4}>
					<i class="fa fa-envelope-o" style={styles.iconStyle} key={4}></i>
				</a>
			</div>
		)
	}

	renderName () {
		return (
			<div>
				<div style={styles.name}>Patrick Huang</div>
				<div style={styles.title}>Software Engineer</div>
			</div>
		)
	}

	renderSkills () {
		return (
			<div style={styles.sectionContainer}>
				<div style={styles.sectionHeader}>Skills</div>
				<div style={styles.skillsSectionContent}>
					<div style={styles.skillItem}>Javascript</div>
					<div style={styles.skillItem}>HTML</div>
					<div style={styles.skillItem}>CSS</div>
					<div style={styles.skillItem}>React</div>
					<div style={styles.skillItem}>Redux</div>
					<div style={styles.skillItem}>Node</div>
					<div style={styles.skillItem}>Express</div>
					<div style={styles.skillItem}>PostgreSQL</div>
				</div>
			</div>
		)
	}

	renderExperience () {
		return (
			<div style={styles.sectionContainer}>
				<div style={styles.sectionHeader}>Experience</div>
				<div style={styles.sectionContent}>
					<div style={styles.experienceContainer}>
						<div style={styles.experienceHeaderContainer}>
							<div style={styles.experienceTitle}>Toumei Consulting</div>
							<div style={styles.experienceTimeline}>August 2018 - Present</div>
						</div>
						<div style={styles.contractCompanyContainer}>
							<div style={styles.experienceHeaderContainer}>
								<div style={styles.experienceTitle}>Walt Disney Studio Tech</div>
								<div style={styles.experienceTimeline}>August 2018 - Present</div>
							</div>
							<div style={styles.experienceRole}>Software Engineer</div>
							<div style={styles.experienceContent}>
								Develop single page applications as a servicing tool to support Disney direct-to-consumer initiatives.
								Responsibilities include writing well tested RESTful APIs based on client specs, building front-end components with Redux,
								and monitoring / debugging deployment build issues in Jenkins and Openshift.
							</div>
						</div>
					</div>
					<div style={styles.experienceContainer}>
						<div style={styles.experienceHeaderContainer}>
							<div style={styles.experienceTitle}>Laurel & Wolf</div>
							<div style={styles.experienceTimeline}>January 2018 - August 2018</div>
						</div>
						<div style={styles.experienceRole}>Software Engineer</div>
						<div style={styles.experienceContent}>
							Developed and launched React Native mobile application as part of the company’s growth team initiative. 
							Google Analytics was integrated to perform data-driven ROI analysis. On the web application: introduced default payment option 
							for customer shopping checkout and reworked customer shopping list.
						</div>
					</div>
					<div style={styles.experienceContainer}>
						<div style={styles.experienceHeaderContainer}>
							<div style={styles.experienceTitle}>Dumo</div>
							<div style={styles.experienceTimeline}>January 2017 - January 2018</div>
						</div>
						<div style={styles.experienceRole}>Software Engineer</div>
						<div style={styles.experienceContent}>
							Built single page application to deliver over 25 new product features including dashboard view, analytics, and user settings.
							Responsibilities included developing RESTful APIs to aggregate user growth and revenue trends, implementing recipient payout 
							system using Stripe API, and integrating Twitter, Instagram, and Facebook oauth for authentication.
						</div>
					</div>
					<div style={styles.experienceContainer}>
						<div style={styles.experienceHeaderContainer}>
							<div style={styles.experienceTitle}>Channelmeter</div>
							<div style={styles.experienceTimeline}>June 2016 - September 2016</div>
						</div>
						<div style={styles.experienceRole}>Software Engineer Intern</div>
						<div style={styles.experienceContent}>
							Mainly worked on Instagram API integration to build new analytics tool for user media content.
							Other features included adding group chat notifications for messenger application and developing user dashboard 
							settings to reflect new designs.
						</div>
					</div>
				</div>
			</div>
		)
	}

	renderProjects () {
		const reactReddit = require('../images/react-reddit.png')
		return (
			<div style={styles.sectionContainer}>
				<div style={styles.sectionHeader}>Personal Projects</div>
				<div style={styles.sectionContent}>
					<div style={styles.projectTitle}>React Reddit</div>
					<div style={styles.projectContent}>
						Client side web application written in React, Node and Express, integrated with Reddit API.
						Features include user login, retrieving subscribed subreddits, and displaying account information.
					</div>
					<img src={reactReddit} style={styles.reactRedditImage} />
				</div>
			</div>
		)
	}

	renderEducation () {
		return (
			<div style={styles.sectionContainer}>
				<div style={styles.sectionHeader}>Education</div>
				<div style={styles.sectionContent}>
					<div style={styles.educationTitle}>University of California, San Diego (2012 - 2016)</div>
					<div style={styles.educationMajor}>B.S. Computer Science</div>
				</div>
			</div>
		)
	}

	render () {
		const paperStyle = this.state.windowWidth > 499 ? styles.paper : styles.paperMobileView
		return (
			<div style={styles.container}>
				<Paper style={paperStyle} zDepth={2}>
					<div style={styles.paperWrapper}>
						{this.renderName()}
						<div style={styles.line} />
						{this.renderSkills()}
						<div style={styles.line} />
						{this.renderExperience()}
						<div style={styles.line} />
						{this.renderProjects()}
						<div style={styles.line} />
						{this.renderEducation()}
					</div>
					{this.renderSocialIcons()}
				</Paper>
			</div>
		)
	}
}

export default Radium(Resume)
