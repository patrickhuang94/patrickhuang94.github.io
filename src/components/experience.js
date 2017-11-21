import React from 'react'
import Radium from 'radium'

import ExperienceCard from './cards/experienceCard'

import {
	sectionWidthContainer,
	sectionTitleContainer
} from './styles/sharedStyles'

const experienceContainer = {
	display: 'flex',
	justifyContent: 'center',
	padding: '30px 0px',
	width: '100%',
	background: '#EEEEEE'
}

class Experience extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			companies: [
				{
					name: 'Dumo',
					title: 'Software Engineer',
					duration: 'January 2017 - Present',
					location: 'Los Angeles, CA',
					description: `Build responsive consumer-facing web application with
						Google's Material UI design. Tasks include developing RESTful application
						to aggregate user growth and revenue trends, implementing recipient payout
						system with Stripe API, setting up and deploying web servers through AWS,
						and conducting unit testing across both front and backend code.`,
					tags: [
						'HTML5',
						'CSS3',
						'Javascript',
						'React',
						'Redux',
						'Node.js',
						'MySQL'
					]
				},
				{
					name: 'Channelmeter',
					title: 'Software Engineer Intern',
					duration: 'June 2016 - September 2016',
					location: 'San Francisco, CA',
					description: `Integrated Instagram API into existing platform to build user analytics
						for clients to better understand media content. Other projects included introducing
						group chat capabilities and notification systems in the messenger application,
						recoding permission settings for fuller administrative control., and refactoring
						frontend codebase for performance improvements.`,
					tags: [
						'HTML5',
						'CSS3',
						'Coffeescript',
						'React',
						'Flux',
						'Node.js',
						'MySQL'
					]
				},
				{
					name: 'Unifyed',
					title: 'Mobile Developer',
					duration: 'June 2015 - December 2015',
					location: 'Los Angeles, CA',
					description: `Developed and published a social media mobile application for iOS
						which reached over 1,000 users within the first month of release.
						Tasks included integrating Facebook API for user data retrieval,
						implementing an in-app messaging system for users, and creating
						the Discovery page for users to find out what's happening around them.`,
					tags: [
						'Swift',
						'Parse',
						'XCode'
					]
				}
			]
		}
	}

	render() {
		return (
			<div style={experienceContainer}>
				<div style={sectionWidthContainer}>
					<div style={sectionTitleContainer}>
						<h1>Experience</h1>
					</div>

					{
						this.state.companies.map((company) => {
							return (
								<ExperienceCard
									name={company.name}
									title={company.title}
									duration={company.duration}
									location={company.location}
									description={company.description}
									tags={company.tags}
								/>
							)
						})
					}

				</div>
			</div>
		)
	}
}

export default Radium(Experience)
