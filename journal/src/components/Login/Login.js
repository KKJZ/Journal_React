import React from 'react';
// import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {HashRouter as Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './login.css';
import {authRequest, authError, storeAuthInfo} from '~/actions/auth';
import {API_BASE_URL} from '~/config';


//INPUT BUTTON => LOGIN ACTION
//handle error actions

export class Login extends React.Component {
	loginProxy(e) {
		e.persist();
		e.preventDefault();
		this.login(this.refs.UserName.value, this.refs.Password.value);
	};
	login(userName, password) {
		//request auth
		console.log(userName)
		this.props.dispatch(authRequest());
		 
			fetch(`${API_BASE_URL}/login`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					userName,
					password
				})
			})
			.then(res => normalizeResponseErrors(res))
			.then(res => res.json())
			.then(({authToken}) => storeAuthInfo(authToken, this.props.dispatch))
			.catch(err => {
				const {code} = err;
				console.log(err);
				this.props.dispatch(authError(err));
			})
	}
	componentDidUpdate(prevProps) { 
		if(this.props.state.loading !== prevProps.loading) {
			console.log('loading!!!')
		}
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

const mapStateToProps = state => ({
	authToken: state.authToken,
	currentUser: state.currentUser,
	loading: state.loading,
	error: state.error
});


export default connect(mapStateToProps)(Login);