import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import 'react-input-range/lib/css/index.css'
import 'antd/dist/antd.min.css'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
