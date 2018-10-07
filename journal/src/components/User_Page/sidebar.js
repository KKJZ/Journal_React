import React from "react";

export default function Sidebar(props) {
	return (
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
	)
};