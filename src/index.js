import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StyleRoot } from 'radium'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const app = (
	<StyleRoot>
		<Router>
			<Route path="/" component={App} />
		</Router>
	</StyleRoot>
)

ReactDOM.render(
	app,
	document.getElementById('root')
)

registerServiceWorker()
