import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StyleRoot } from 'radium'

import App from './components/App'
import Experience from './components/experience'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


const app = (
	<MuiThemeProvider>
		<StyleRoot>
			<Router>
				<Route path="/" component={App}>
					<Route path={'/experience'} component={Experience} />
				</Route>
			</Router>
		</StyleRoot>
	</MuiThemeProvider>
)

ReactDOM.render(
	app,
	document.getElementById('root')
)

registerServiceWorker()
