import React from 'react';
// import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {HashRouter as Link} from 'react-router-dom';
import {connect} from 'react-redux';
import jwtDecode from 'jwt-decode';
import {normalizeResponseErrors} from '~/actions/utils';
import './login.css';
import {saveAuthToken} from '~/localstorage';
import {authRequest, authError, authSuccess, setAuthToken, fetchAuth} from '~/actions/auth';
import {API_BASE_URL} from '~/config';


//INPUT BUTTON => LOGIN ACTION
//handle error actions

export class Login extends React.Component {
	loginProxy(e) {
		e.persist();
		e.preventDefault();
		//want this to be a fetch whatever function
		fetchAuth(this.refs.UserName.value, this.refs.Password.value, this.props.dispatch, 'login');
	};
	render() {
		let error;
		if (this.props.error) {
			error= (
				<div className="error" aria-live="polite">
					{this.props.state.error}
				</div>
			)
		}
		let loading;
		if (this.props.loading !== false) {
			loading = (
				<input type="submit" name="Submit" className="submit button is-primary"/>
			);
			<input type="submit" name="Submit" className="submit button is-primary is-loading"/>
		}
	return (
		<div className="login">
			{error}
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

					{loading}
					<Link to="/register"><a href="/register" className="register button is-link">Register</a></Link>
				</fieldset>
			</form>
		</div>
		)
	}
}

const mapStateToProps = state => ({
	authToken: state.authToken,
	currentUser: state.currentUser,
	loading: state.loading,
	error: state.error
});


export default connect(mapStateToProps)(Login);