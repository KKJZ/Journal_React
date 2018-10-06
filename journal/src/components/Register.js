import React from 'react';

export default function Register(props) {
	return (
		<div class="register">
			<form role="Register" id="register" method="POST">
				<fieldset class="register">
					<h1>Register</h1>
					<label for="userName" class="sr-only">User Name:</label>
					<input type="text" name="userName" placeholder="User Name" class="userName form-control" required>
					<label for="password" class="sr-only">Password:</label>
					<input type="password" name="password" placeholder="Password" class="password form-control" required>
					<label for="Confirm" class="sr-only">Confirm</label>
					<input type="password" name="confirm" placeholder="Confirm Password" class="password form-control" required>
					<input type="submit" name="Submit" class="submit btn btn-lg btn-primary btn-block">
					<button class="back btn btn-lg btn-block">Back</button>
				</fieldset>
			</form>
		</div>
	)
}