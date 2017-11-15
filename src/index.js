import React from 'react'
import ReactDOM from 'react-dom'
import { StyleRoot } from 'radium'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const app = (
	<MuiThemeProvider>
		<StyleRoot>
			<App />
		</StyleRoot>
	</MuiThemeProvider>
)

ReactDOM.render(
	app,
	document.getElementById('root')
);

registerServiceWorker();
