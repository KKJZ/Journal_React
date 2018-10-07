import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import 'bulma';
import Landing from './Landing/Landing';
import Login from './Login/Login';
import Register from './Register/Register';
import User_Page from './User_Page/User_Page';

export default function App() {
	return (
		<Router>
			<main>
				<Switch>
				<Route exact path='/' component={Landing}/>
				<Route exact path='/login' component={Login}/>
				<Route exact path='/register' component={Register}/>
				<Route exact path='/profile/:UserName' component={User_Page}/>
				</Switch>
			</main>
		</Router>
	)
}