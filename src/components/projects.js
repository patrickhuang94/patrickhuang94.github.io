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
}

const projectsContainer = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '30px 0px',
	width: '100%',
	background: '#FFFFFF'
}

const cardsContainer = {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%'
}

class Projects extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			projects: [
				{
					name: 'React-Reddit'
				},
				{
					name: 'Informate'
				},
				{
					name: 'Receptional'
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
					<div style={cardsSectionWidthContainer}>
						<div style={cardsContainer}>
							{
								this.state.projects.map((project) => {
									return (
										<ProjectCard
											name={project.name}
										/>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Radium(Projects)
