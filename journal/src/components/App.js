import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import 'bulma';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import User_Page from './User_Page';

export default function App() {
	return (
		<Router>
			<main>
				<Switch>
				<Route exact path='/' component={Landing}/>
				<Route exact path='/login' component={Login}/>
				<Route exact path='/register' component={Register}/>
				<Route exact path='/profile/:UserName' component={Landing}/>
				</Switch>
			</main>
		</Router>
	)
}