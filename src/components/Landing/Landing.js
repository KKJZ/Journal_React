import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setHome, setExample, setDocumentation} from '~/actions/landing';

export function Landing(props) {
	const homeClick = e => {
		e.preventDefault();
		props.dispatch(setHome())
	};

	const exampleClick = e => {
		e.preventDefault();
		props.dispatch(setExample())
	};

	const docClick = e => {
		e.preventDefault();
		props.dispatch(setDocumentation())
	};

	let header;
	let body;
	switch(props.active) {
		case('HOME'):
			header = (
				<div className="navbar-end">
					<a className="navbar-item is-active" href="#"
					onClick={homeClick}>
					Home</a>
					<a className="navbar-item" href="#"
					onClick={exampleClick}>
					Examples</a>
					<a className="navbar-item" href="#"
					onClick={docClick}>
					Documentation</a>
				</div>
			);
			body = (
				<div className="container has-text-centered">
					<h1 className="title">Personal Publication</h1>
					<h2 className="subtitle">Never forget your journal again.</h2>
					<Link to="/login"><a className="button is-large is-info login" href="/login">Check it out!</a></Link>
				</div>
			)
			break;
		case('EXAMPLE'):
			header = (
				<div className="navbar-end">
					<a className="navbar-item" href="#"
					onClick={homeClick}>
					Home</a>
					<a className="navbar-item is-active" href="#"
					onClick={exampleClick}>
					Examples</a>
					<a className="navbar-item" href="#"
					onClick={docClick}>
					Documentation</a>
				</div>
			);
			body = (
				<div className="container has-text-centered">
					<h1 className="title">Examples</h1>
					<div className="columns">
						<div className="column">

						</div>
						<div className="column">

						</div>
					</div>
				</div>
			)
			break;
		case('DOCUMENTAION'):
			header = (
				<div className="navbar-end">
					<a className="navbar-item" href="#"
					onClick={homeClick}>
					Home</a>
					<a className="navbar-item" href="#"
					onClick={exampleClick}>
					Examples</a>
					<a className="navbar-item is-active" href="#"
					onClick={docClick}>
					Documentation</a>
				</div>
			)
			body = (
				<div className="container has-text-centered">
					<h1 className="title">Documentation</h1>
					<h2 className="subtitle">Made by: Kyle Stockmann</h2>
					<h2 className="subtitle">Built with:</h2>
					<div className="columns">
						<div className="column">
							<h3><u><a href="https://github.com/KKJZ/Journal_React" target="_blank">Frontend:</a></u></h3>
							<ul>
								<li>React</li>
								<li>React-Router</li>
								<li>Redux</li>
							</ul>
						</div>
						<div className="column">
							<h3><u><a href="https://github.com/KKJZ/Journal_Backend" target="_blank">Backend:</a></u></h3>
							<ul>
								<li>Express</li>
								<li>Jwt</li>
								<li>Node.js</li>
								<li>Mongodb</li>
							</ul>
						</div>
					</div>
				</div>
			)
			break;
		default:
			console.log('default');
	}

	return (
	<section className="hero is-primary is-fullheight is-bold">
		<div className="hero-head">
			<nav className="navbar">
				<div className="container">
					<div className="navbar-brand">
						<a className="navbar-item" href="#"
						onClick={homeClick}
						>Personal Publication</a>
					</div>
					<div id="navbarMenuHeroA" className="navbar-menu">
						{header}
					</div>
				</div>
			</nav>
		</div>
		<div className="hero-body">
			{body}
		</div>
	</section>
	)
}


const mapStateToProps = state => ({
	active: state.landing.active
});

export default connect(mapStateToProps)(Landing);