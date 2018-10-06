import React from 'react';
import './login.css';

export default function Login(props) {
	return (
		<div class="login">
			<form for="Login" id="login" method="POST">
				<fieldset class="login">
					<h1>Login</h1>
					<label for="userName" class="sr-only">User Name:</label>
					<input type="text" name="userName" placeholder="User Name" required class="userName form-control"/>
					<label for="password" class="sr-only">Password:</label>
					<input type="password" name="password" placeholder="Password" required class="password form-control"/>
					<input type="submit" name="Submit" class="submit btn btn-lg btn-primary btn-block"/>
					<button class="register btn btn-lg btn-block">Register</button>
				</fieldset>
			</form>
		</div>
	)
}