import React from 'react'
import Radium from 'radium'

import ProjectCard from './cards/projectCard'

import {
	sectionWidthContainer,
	sectionTitleContainer
} from './styles/sharedStyles'

const projectsContainer = {
	display: 'flex',
	justifyContent: 'center',
	padding: '30px 0px 50px 0px',
	width: '100%',
	background: '#FFFFFF',
}

const projectCardContainer = {
	display: 'flex',
	justifyContent: 'space-around',
	width: '100%',
	'@media screen and (max-width: 649px)': {
		flexDirection: 'column'
	}
}

class Projects extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			projects: [
				{
					name: 'React-Reddit',
					description: `The project is a redesign of the current Reddit web application and
						implemented with React, Redux, and Reddit's API.`,
					githubUrl: `http://github.com/patrickhuang94/react-reddit`,
					isLeftCard: true
				},
				{
					name: 'Informate',
					description: `This group project focuses on allowing users to discover
						interesting facts submitted by other users.`,
					githubUrl: `http://github.com/patrickhuang94/informate`
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
					<div style={projectCardContainer}>
						{
							this.state.projects.map((project) => {
								return (
									<ProjectCard
										name={project.name}
										description={project.description}
										isLeftCard={project.isLeftCard}
										githubUrl={project.githubUrl}
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
