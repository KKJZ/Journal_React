import React from 'react';
import './user_page.css';

export default function User_Page(props) {
	return (
		<div className='wrapper'>
			<aside class="sidebar">
				// <img src=""/>
				<button class="settings btn btn-lg btn-success">Settings</button>
				<button class="logout btn btn-lg btn-danger">Logout</button>
				<ul class="entry-list">
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
			<div class="user_page" role="User Page">
				<h1>title</h1>
				<h2>date</h2>
				<section class="content">
			
				</section>
				<button class="edit btn btn-lg btn-success">Edit</button>
				<button class="delete btn btn-lg btn-danger">Delete</button>
			</div>
		</div>
	)
}