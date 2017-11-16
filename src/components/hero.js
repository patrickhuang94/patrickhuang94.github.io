import React from 'react'
import Radium from 'radium'

import Paper from 'material-ui/Paper'

import {
	paperStyle
} from './styles/cardStyles'

import {
	paragraphBottomMarginStyle,
	keywordStyle
} from './styles/textStyles'

import imageSrc from '../images/photo.jpg'

const heroContainer = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	background: 'linear-gradient(#1FBDC2 60%, #FFFFFF 40%)'
}

const customPaperStyle = {
	...paperStyle,
	height: '100%'
}

const sectionWidthContainer = {
	margin: '100px 20px 0px 20px',
}

const cardContainer = {
	display: 'flex',
	padding: '30px',
	'@media screen and (max-width: 649px)': {
		flexDirection: 'column'
	}
}

const descriptionContainer = {
	display: 'flex',
	flexDirection: 'column',
	marginLeft: '45px',
	'@media screen and (max-width: 649px)': {
		marginLeft: '0px'
	}
}

const imageContainer = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'@media screen and (max-width: 649px)': {
		marginBottom: '35px'
	}
}

const socialIconsContainer = {
	backgroundColor: '#1FBDC2',
	display: 'flex',
	justifyContent: 'center',
	height: '60px'
}

const imageStyle = {
	height: '220px',
	width: '220px',
	borderRadius: '50%',
	backgroundImage: `url(${imageSrc})`,
	backgroundSize: 'cover'
}

const outerIconStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	width: '50px',
	textDecoration: 'none',
	':hover': {
		borderRadius: '50%',
		backgroundColor: 'transparent',
		transition: '0.8s'
	}
}

const iconStyle = {
	fontSize: '22px',
	margin: '0px 20px',
	color: 'white'
}

const headingStyle = {
	margin: '0px 0px 15px 0px'
}

class Hero extends React.Component {
	render() {
		return (
			<div style={heroContainer}>
				<div style={sectionWidthContainer}>
					<Paper style={customPaperStyle} zDepth={2}>
						<div style={cardContainer}>
							<div style={imageContainer}>
								<img style={imageStyle} />
							</div>

							<div style={descriptionContainer}>
								<h1 style={headingStyle}>Hi, I'm Patrick Huang</h1>

								<p style={paragraphBottomMarginStyle}>
									I am a <span style={keywordStyle}>full stack web developer </span>
									based in Los Angeles, CA. I have experience building web applications from
									the grounds up, managing all aspects of both frontend and backend code.
								</p>
								<p style={paragraphBottomMarginStyle}>
									My development tools include <span style={keywordStyle}>React,
									Node.js, Redux, Flexbox, and Radium</span>, along with
									other related frameworks and libraries.
								</p>
								<p>
									When I'm not coding, you can catch me on <a href="http://soundcloud.com/brookhollow"
									target="_blank" rel="noopener noreferrer" style={keywordStyle}>Soundcloud</a>,
									playing Hearthstone, and bouldering!
								</p>
							</div>
						</div>

						<div style={socialIconsContainer}>
							<a href="https://www.linkedin.com/in/patrickhhuang/" target="_blank" style={outerIconStyle} key={1} rel="noopener noreferrer">
								<i class="fa fa-linkedin" style={iconStyle} key={1}></i>
							</a>
							<a href="https://github.com/patrickhuang94" target="_blank" style={outerIconStyle} key={2} rel="noopener noreferrer">
								<i class="fa fa-github" style={iconStyle} key={2}></i>
							</a>
							<a href="https://stackoverflow.com/users/2557256/patrickhuang94" target="_blank" style={outerIconStyle} key={3} rel="noopener noreferrer">
								<i class="fa fa-stack-overflow" style={iconStyle} key={3}></i>
							</a>
							<a href="mailto:patrickhuang94@gmail.com" target="_top" style={outerIconStyle} key={4}>
								<i class="fa fa-envelope-o" style={iconStyle} key={4}></i>
							</a>
						</div>
					</Paper>
				</div>
			</div>
		)
	}
}

export default Radium(Hero)
