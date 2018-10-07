import React from 'react';
import './user_page.css';
import Sidebar from './sidebar';
import Main from './main';
import 'bulma';

export default class User_Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
			jwt: localStorage.getItem('jwt'),
			entries: []
		};
	}

	render() { 
		return (
			<div className='wrapper'>
				<Sidebar/>
				<Main/>
			</div>
		)
	}
};