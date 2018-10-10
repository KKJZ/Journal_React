import React from 'react';
import './user_page.css';
import Nav from './nav';
import Main from './main';
import 'bulma';

export default class User_Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
			jwt: localStorage.getItem('jwt'),
			entries: [],
			editing: false
		};
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