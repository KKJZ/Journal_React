import React from 'react';
import {connect} from 'react-redux';
import './user_page.css';
import Nav from './nav';
import Main from './main';
import {refreshAuth} from '~/actions/auth';
import 'bulma';

export class User_Page extends React.Component {
	componentWillMount(prevProps) {
		if (this.props.authToken === null) {
			return <Redirect to='/'/>
		}
		if (this.props.refresh === true) {
			refreshAuth(this.props.authToken, this.props.dispatch)
		}
	}

	componentWillUnmount() {
		this.stopRefresh();
	}

	componentDidUpdate(prevProps) {
		if(this.props.refresh !== true) {
			this.startRefresh();
		}
	}

	startRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(authRefresh()),
			60 * 60 * 1000 //1 hr need it to be 5 min
		);
	}

	stopRefresh() {
		if(!this.refreshInterval) {
			return;
		}
		clearInterval(this.refreshInterval);
	}

	render() { 
		return (
			<div className='wrapper'>
				<Nav/>
				<Main/>
			</div>
		)
	}
};

const mapStateToProps = state => (
	console.log(state),
{
	authToken: state.auth.authToken,
	currentUser: state.auth.currentUser,
	loading: state.auth.loading,
	refresh: state.auth.refresh,
	// entries: [...state],
	// editing: state,
	// entry: state
});

export default connect(mapStateToProps)(User_Page);