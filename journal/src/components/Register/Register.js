import React from 'react';
import './register.css'

export default function Register(props) {
	return (
		<div className="register">
			<form role="Register" id="register" method="POST">
				<fieldset className="register">
					<h1>Register</h1>
					<label for="userName" className="sr-only">User Name:</label>
					<input type="text" name="userName" placeholder="User Name" className="userName form-control" required />
					<label for="password" className="sr-only">Password:</label>
					<input type="password" name="password" placeholder="Password" className="password form-control" required />
					<label for="Confirm" className="sr-only">Confirm</label>
					<input type="password" name="confirm" placeholder="Confirm Password" className="password form-control" required />
					<input type="submit" name="Submit" className="submit btn btn-lg btn-primary btn-block"/>
					<button className="back btn btn-lg btn-block">Back</button>
				</fieldset>
			</form>
		</div>
	)
}