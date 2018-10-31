import React from 'react';
import {BrowserRouter as Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import '~/components/User_Page/user_page.css';
import '~/fonts.css';
import Nav from './nav';
import Main from './main';
import {refreshAuth} from '~/actions/auth';
import {fetchEntries} from '~/actions/profile';
import 'bulma';

export class User_Page extends React.Component {
	componentWillMount(prevProps) {
		if (this.props.authToken === null) {
			this.props.history.push('/login');
		}
		if (this.props.refresh === true) {
			refreshAuth(this.props.authToken, this.props.dispatch)
		}
		//action that will grab the entries
		fetchEntries(this.props.userName, this.props.authToken, this.props.dispatch);
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
			5 * 60 * 1000
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

const mapStateToProps = state => ({
	authToken: state.auth.authToken,
	currentUser: state.auth.currentUser,
	loading: state.auth.loading,
	refresh: state.auth.refresh,
	entryLoading: state.profile.entryLoading,
	entryError: state.profile.entryError,
	entries: [state.profile.entries],
	editing: state.profile.editing,
	entry: state.profile.entry
});

export default connect(mapStateToProps)(User_Page);