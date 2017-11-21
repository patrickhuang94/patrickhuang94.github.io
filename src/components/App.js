import React from 'react'

import WOW from 'wowjs'

// import FloatingButton from 'material-ui/FloatingActionButton'
// import Resume from 'material-ui/svg-icons/action/description'

// import Header from './header'
import Hero from './hero'
import TechStack from './techStack'
import Experience from './experience'
// import Projects from './projects'
import Footer from './footer'

const appStyle = {
	height: '100%',
	minHeight: '100%',
	width: '100%'
}

const appContainerStyle = {
	height : 'auto',
	width: '100%',
	minHeight: '100%',
	margin: 'auto',
	padding: '0px 0px 0px 0px'
}

// const floatingButtonStyle = {
// 	position: 'fixed',
// 	bottom: '25px',
// 	right: '25px'
// }

// <a href="../../Resume.pdf" type="application/pdf" target="_blank">
// 	<FloatingButton style={floatingButtonStyle} backgroundColor="#1f6cc2">
// 		<Resume />
// 	</FloatingButton>
// </a>

class App extends React.Component {
	componentDidMount() {
		new WOW.WOW({
			offset: 25
		}).init()
	}

	render() {
		return (
			<div style={appStyle}>
				<div style={appContainerStyle}>
					<Hero />
					<TechStack />
					<Experience />
					<Footer />
				</div>

			</div>
		)
	}
}

export default App
