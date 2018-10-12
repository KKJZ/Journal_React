import React from 'react';
// import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {HashRouter as Link} from 'react-router-dom';
import './login.css';
import {fetchLogin} from '~/actions/login';


//INPUT BUTTON => LOGIN ACTION
//handle error actions

export default class Login extends React.Component {
	loginProxy(e) {
		e.persist();
		e.preventDefault();
		fetchLogin(this.refs.UserName.value, this.refs.Password.value);
	};
	render() {
	return (
		<div className="login">
			<form for="Login" id="login"
			onSubmit={e=> this.loginProxy(e)}>
				<fieldset className="login">
					<h1 className="title">Login to your Journal</h1>

					<div className="field">
						<p className="control has-icons-left">
							<input type="text" name="userName" placeholder="User Name" required className="input"
							ref="UserName"/>
							<span className="icon is-small is-left">
								<i className="fas fa-user"></i>
							</span>
						</p>
					</div>

					<div className="field">
						<p className="control has-icons-left">
							<input type="password" name="password" placeholder="Password" required className="input"
							ref="Password"/>
							<span className="icon is-small is-left">
								<i className="fas fa-lock"></i>
							</span>
						</p>
					</div>

					<input type="submit" name="Submit" className="submit button is-primary"/>
					<Link to="/register"><a href="/register" className="register button is-link">Register</a></Link>
				</fieldset>
			</form>
		</div>
		)
	}
}