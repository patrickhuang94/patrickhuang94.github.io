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
					description: 'Redesign of Reddit'
				},
				{
					name: 'Informate',
					description: 'Discover things you did not know'
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
		)
	}
}

export default Radium(Projects)
