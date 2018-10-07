import React from 'react';
import "bulma";

export default function Landing(props) {
	return (
	// hero head: stick at the top
	<div className="wrapper">
		<div className="hero-head">
			<nav className="navbar">
				<div className="container">
					<div className="navbar-brand">
						<a className="navbar-item" href="#">Personal Publication</a>
					</div>
					<div id="navbarMenuHeroA" className="navbar-menu">
						<div className="navbar-end">
							<a className="navbar-item is-active" href="#">
							Home</a>
							<a className="navbar-item" href="#">
							Examples</a>
							<a className="navbar-item" href="#">
							Documentation</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
		<div className="hero-body">
			<div className="container has-text-centered">
				<h1 className="title">Personal Publication</h1>
				<h2 className="subtitle">Never forget your journal again.</h2>
				<a className="button is-large is-info" href="#">Check it out!</a>
			</div>
		</div>
	</div>
	)
}