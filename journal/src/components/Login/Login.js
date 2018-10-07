import React from 'react';
import './login.css';

export default function Login(props) {
	return (
		<div className="login">
			<form for="Login" id="login" method="POST">
				<fieldset className="login">
					<h1>Login</h1>
					<label for="userName" className="sr-only">User Name:</label>
					<input type="text" name="userName" placeholder="User Name" required className="userName form-control"/>
					<label for="password" className="sr-only">Password:</label>
					<input type="password" name="password" placeholder="Password" required className="password form-control"/>
					<input type="submit" name="Submit" className="submit btn btn-lg btn-primary btn-block"/>
					<button className="register btn btn-lg btn-block">Register</button>
				</fieldset>
			</form>
		</div>
	)
}