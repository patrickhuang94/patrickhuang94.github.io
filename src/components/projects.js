import React from 'react'
import Radium from 'radium'

import ProjectCard from './cards/projectCard'

import {
	sectionWidthContainer,
	sectionTitleContainer
} from './styles/sharedStyles'

const cardsSectionWidthContainer = {
	display: 'flex',
	width: '100%'
	// width: '700px'
}

const projectsContainer = {
	display: 'flex',
	justifyContent: 'center',
	padding: '30px 0px',
	width: '100%',
	background: '#FFFFFF',
}

const cardsContainer = {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	'@media screen and (max-width: 649px)': {
		flexDirection: 'column',
	}
}

class Projects extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			projects: [
				{
					name: 'React-Reddit',
					description: `With the current Reddit website still stuck in 2007, a redesign
						was needed. The project was designed by Kevin Nguyen and implemented
						with React, Redux, and Reddit's API.`
				},
				{
					name: 'Informate',
					description: `Google looks up answers to questions you don't know, but
						how can you find out things that you didn't know existed? This group
						project focuses on allowing users to discover interesting facts submitted by
						other users.`
				}
			]
		}
	}

	render() {
		return (
			<div style={projectsContainer}>
				<div style={sectionWidthContainer}>
					<div style={sectionTitleContainer}>
						<h1>Projects</h1>
					</div>
					<div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
						{
							this.state.projects.map((project) => {
								return (
									<ProjectCard
										name={project.name}
										description={project.description}
										/>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Radium(Projects)
