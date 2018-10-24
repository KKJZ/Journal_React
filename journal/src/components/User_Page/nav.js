import React from "react";
import {connect} from 'react-redux';
import {changeEntry, setEdit} from '~/actions/profile'

// newPostEntry need to make something 

export function Nav(props) {
	const homeEntry = {
		title: 'welcome',
		date: new Date().toString(),
		content: 'in nav',
		userName: 'welcome'
	}

	const homeClick = e => {
		e.preventDefault();
		props.dispatch(setEdit(false));
		props.dispatch(changeEntry(homeEntry))
	}
	//add is-active to navbar-burger and navbar-menu to show nav menu
	const newPostEntry = {
		title: null,
		date: null,
		content: null
	};

	const newPost = () => {
		props.dispatch(changeEntry(newPostEntry));
		props.dispatch(setEdit(true));
	}

	const checkId = e => {
		e.preventDefault();
		let targetId = e.target.id;
		let newEntry = props.entries.filter(entry => targetId !== entry.id);
		props.dispatch(setEdit(false));
		props.dispatch(changeEntry(newEntry[0]));

	}
	const listEntries = [];
	if (props.entries !== null){
		props.entries.forEach(function(entry, index) {
			listEntries.push(
				<a 
				index={index} 
				id={entry.id} 
				className="navbar-item"
				onClick={checkId}>
					{entry.title}
				</a>
			);
		})		
	}
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="#">
					<img src="#" />
				</a>
				<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<a className="navbar-item"
					onClick={homeClick}>
						Home
					</a>
					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">
							Entries
						</a>
						<div className="navbar-dropdown">
						<a className="navbar-item"
						onClick={newPost}>
							New Post
						</a>
							{listEntries}
						</div>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<a className="button is-primary">
								Logout
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
};

const mapStateToProps = state => ({
	entries: state.profile.entries
})

export default connect(mapStateToProps)(Nav)