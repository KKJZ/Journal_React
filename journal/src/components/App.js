import React from 'react';
import {HashRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import Landing from '~/components/Landing/Landing';
import Login from '~/components/Login/Login';
import Register from '~/components/Register/Register';
import User_Page from '~/components/User_Page/User_Page';

export default function App() {
	 return (
	 	<Router>
	 		<main>
	 			<Switch>
	 			<Route exact path='/' component={Landing}/>
				<Route exact path='/login' component={Login}/>
				<Route exact path='/register' component={Register}/>
	 			<Route exact path='/profile/:userName' component={User_Page}/>
	 			</Switch>
	 		</main>
	 	</Router>
	)
}
