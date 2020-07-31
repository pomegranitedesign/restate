import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Properties, Contacts } from './pages'
import Layout from './components/Layout'

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/contacts" component={Contacts} />
				<Route path="/properties" component={Properties} />
				<Route exact path="/" component={Home} />
			</Switch>
		</Layout>
	)
}

export default Routes
