import React from 'react';
import './user_page.css';

export default function User_Page(props) {
	return (
		<div className='wrapper'>
			<aside className="sidebar">
				// <img src=""/>
				<button className="settings btn btn-lg btn-success">Settings</button>
				<button className="logout btn btn-lg btn-danger">Logout</button>
				<ul className="entry-list">
					<select>
						<option>test</option>
						<option>test</option>
					</select>
					<li>Entry</li>
					<li>Entry</li>
					<li>Entry</li>
					<li>Entry</li>
				</ul>
			</aside>
			<div className="user_page" role="User Page">
				<h1>title</h1>
				<h2>date</h2>
				<section className="content">
			
				</section>
				<button className="edit btn btn-lg btn-success">Edit</button>
				<button className="delete btn btn-lg btn-danger">Delete</button>
			</div>
		</div>
	)
}