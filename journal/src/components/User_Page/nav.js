import React from "react";

export default function Nav(props) {
	//add is-active to navbar-burger and navbar-menu to show nav menu
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
					<a className="navbar-item">
					Home
					</a>
					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">
						Entries
						</a>
						<div className="navbar-dropdown">
							<a className="navbar-item">
								Entry #1
							</a>
							<a className="navbar-item">
								Entry #2
							</a>
							<a className="navbar-item">
								Entry #3
							</a>
						</div>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<a className="button is-primary">Logout</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
};