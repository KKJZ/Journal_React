import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter as Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './login.css';
import {fetchAuth} from '~/actions/auth';


//INPUT BUTTON => LOGIN ACTION
//handle error actions

export class Login extends React.Component {
	loginProxy(e) {
		console.log(this.props);
		e.persist();
		e.preventDefault();
		//want this to be a fetch whatever function
		fetchAuth(this.refs.UserName.value, this.refs.Password.value, this.props.dispatch, 'login');
	};

	componentWillMount() {
	};

	render() {
		console.log('render')
		let error;
		if (this.props.error) {
			error = (
				<div className="error" aria-live="polite">
					{this.props.error}
				</div>
			)
		}

		let loading;
		if (this.props.loading === true){
			loading = <input type="submit" name="Submit" className="submit button is-primary is-loading"/> 
		}
		loading = <input type="submit" name="Submit" className="submit button is-primary"/>

		let currentUser;
		if(this.props.currentUser !== null) {
			const url = `/profile/${this.props.currentUser}`
			return <Redirect to={url} />
		}

	return (
		<div className="login">
			{currentUser}
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

Login.propTypes = {
	authToken: PropTypes.string,
	currentUser: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

const mapStateToProps = state => ({
	authToken: state.auth.authToken,
	currentUser: state.auth.currentUser,
	loading: state.auth.loading,
	error: state.auth.error
});


export default connect(mapStateToProps)(Login);