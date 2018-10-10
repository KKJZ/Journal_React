import React from 'react';
// import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {HashRouter as Link} from 'react-router-dom';
import './login.css';

export default function Login(props) {
	return (
		<div className="login">
			<form for="Login" id="login" method="POST"
				onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values))}>
				<fieldset className="login">
					<h1 className="title">Login to your Journal</h1>
					<div className="field">
						<p className="control has-icons-left">
							<input type="text" name="userName" placeholder="User Name" required className="input"/>
							<span className="icon is-small is-left">
								<i className="fas fa-user"></i>
							</span>
						</p>
					</div>
					<div className="field">
						<p className="control has-icons-left">
							<input type="password" name="password" placeholder="Password" required className="input"/>
							<span className="icon is-small is-left">
								<i className="fas fa-lock"></i>
							</span>
						</p>
					</div>
					<input type="submit" name="Submit" className="submit button is-primary"/>
					<Link to="/register"><a className="register button is-link">Register</a></Link>
				</fieldset>
			</form>
		</div>
	)
}