import React from 'react';
import {HashRouter as Link} from 'react-router-dom';
import './register.css';
import {fetchRegister} from '~/actions/register';

export default class Register extends React.Component {
	registProxy(e) {
		e.persist();
		e.preventDefault();
		fetchRegister(this.refs.UserName, this.refs.Password);
	};
	render() {
	return (
		<div className="register">
			<form role="Register" id="register" 
			onSubmit={e=> this.registProxy(e)}>
				<fieldset className="register">
					<h1 className="title">Register</h1>

					<div className="field">
						<p className="control has-icons-left">
							<input type="text" name="userName" placeholder="User Name" className="input" required 
							ref="UserName"/>
							<span className="icon is-small is-left">
								<i className="fas fa-user"></i>
							</span>
						</p>
					</div>

					<div className="field">
						<p className="control has-icons-left has-icons-right">
							<input type="password" name="password" placeholder="Password" className="input" required 
							ref="Password"/>
							<span className="icon is-small is-left">
								<i className="fas fa-lock"></i>
							</span>
							<span class="icon is-small is-right">
      							<i class="fas fa-check"></i>
    						</span>
						</p>
					</div>

					<div className="field">
						<p className="control has-icons-left has-icons-right">
							<input type="password" name="confirm" placeholder="Confirm Password" className="input is-danger" required 
							ref="Confirm"/>
							<span className="icon is-small is-left">
								<i className="fas fa-lock"></i>
							</span>
							<span class="icon is-small is-right">
      							<i class="fas fa-times"></i>
    						</span>
    					</p>
    				</div>

					<input type="submit" name="Submit" className="submit button is-primary"/>

					<Link to="/login"><a href="/login" className="register button is-link">Back</a></Link>
				</fieldset>
			</form>
		</div>
		)
	}
}