import React from 'react';
import {connect} from 'react-redux';
import {HashRouter as Link} from 'react-router-dom';
import './register.css';
import {fetchAuth} from '~/actions/auth';
import {setUserNameField, setPasswordField, setConfirmField} from '~/actions/register';

export class Register extends React.Component {
	registProxy(e) {
		e.persist();
		e.preventDefault();
		fetchAuth(this.refs.UserName.value, this.refs.Password.value, this.props.dispatch, 'register');
	};

	render() {
		let UserName = (
			<p className="control has-icons-left">
				<input type="text" name="userName" placeholder="User Name" className="input" required 
				ref="UserName"
				onChange={e => this.props.dispatch(setUserNameField(e.currentTarget.value))}/>
				<span className="icon is-small is-left">
					<i className="fas fa-user"></i>
				</span>
			</p>
		);

		let Password = (
			<p className="control has-icons-left">
				<input type="password" name="password" placeholder="Password" className="input" required 
				ref="Password"
				onChange={e => this.props.dispatch(setPasswordField(e.currentTarget.value))}/>
				<span className="icon is-small is-left">
					<i className="fas fa-lock"></i>
				</span>
			</p>
		);

		let Confirm;
		if(this.props.confirmField !== null) {
			if(this.props.confirmField !== this.props.passwordField) {
				//IF CONFIRM AND PASSWORD FIELDS DO NOT MATCH
				Confirm = (
				<p className="control has-icons-right">
					<input type="password" name="confirm" placeholder="Confirm Password" className="input is-danger" required 
					ref="Confirm"
					onChange={e => this.props.dispatch(setConfirmField(e.currentTarget.value))}/>
					<span className="icon is-small is-right">
      					<i className="fas fa-lock" />
    				</span>
    			</p>
    			);
			}
			else {
				//IF THEY DO MATCH
				Confirm = (
				<p className="control has-icons-right">
					<input type="password" name="confirm" placeholder="Confirm Password" className="input" required 
					ref="Confirm"
					onChange={e => this.props.dispatch(setConfirmField(e.currentTarget.value))}/>
					<span className="icon is-small is-right">
      					<i className="fas fa-check" />
    				</span>
    			</p>
    		);}
		}
		else {
			//CONFIRMFIELD == NULL
			Confirm = (
			<p className="control has-icons-right">
				<input type="password" name="confirm" placeholder="Confirm Password" className="input" required 
				ref="Confirm"
				onChange={e => this.props.dispatch(setConfirmField(e.currentTarget.value))}/>
				<span className="icon is-small is-right">
      				<i className="fas fa-times" />
    			</span>
    		</p>
		)}

		let Submit;
		if (this.props.userNameField !== null){

			if(this.props.passwordField !== null){

				if(this.props.confirmField === this.props.passwordField){
					//IF CONFIRMFIELD AND PASSWORDFIELD =
					Submit = (<input type="submit" name="Submit" className="submit button is-primary"/>);
				} else {
					//IF PASSWORDFIELD !=== CONFIRMFIELD
					Submit = (<input type="submit" name="Submit" className="submit button is-primary" disabled/>)}
			} else {
				//PASSWORDFIELD == NULL
				Submit = (<input type="submit" name="Submit" className="submit button is-primary" disabled/>)}
		}else {
			//USERNAMEFIELD == NULL
			Submit = (<input type="submit" name="Submit" className="submit button is-primary" disabled/>)};

		let currentUser;
		if(this.props.currentUser !== null) {
			const url = `/profile/${this.props.currentUser}`
			return <Redirect to={url} />
		}

	return (
		<div className="register">
		{currentUser}
			<form role="Register" id="register" 
			onSubmit={e=> this.registProxy(e)}>
				<fieldset className="register">
					<h1 className="title">Register</h1>

					<div className="field">
						{UserName}
					</div>

					<div className="field">
						{Password}
					</div>

					<div className="field">
						{Confirm}
    				</div>

					{Submit}

					<Link to="/login"><a href="/login" className="register button is-link">Back</a></Link>
				</fieldset>
			</form>
		</div>
		)
	}
};

const mapStateToProps = state => ({
	authToken: state.auth.authToken,
	currentUser: state.auth.currentUser,
	loading: state.auth.loading,
	error: state.auth.error,
	userNameField: state.register.userNameField,
	passwordField: state.register.passwordField,
	confirmField: state.register.confirmField
});


export default connect(mapStateToProps)(Register);