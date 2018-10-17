import React from 'react';
import {connect} from 'react-redux';
import './user_page.css';
import Nav from './nav';
import Main from './main';
import 'bulma';

export class User_Page extends React.Component {

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
	entries: [...state],
	editing: state,
	entry: state
});

export default connect(mapStateToProps)(User_Page);