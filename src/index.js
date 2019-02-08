import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StyleRoot } from 'radium'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const app = (
	<MuiThemeProvider>
		<StyleRoot>
			<Router>
				<Route path="/" component={App} />
			</Router>
		</StyleRoot>
	</MuiThemeProvider>
)

ReactDOM.render(
	app,
	document.getElementById('root')
)

registerServiceWorker()
