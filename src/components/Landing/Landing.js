import React from 'react';
import "~/components/Landing/landing.css"
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
					Screenshots</a>
					<a className="navbar-item" href="#"
					onClick={docClick}>
					Documentation</a>
				</div>
			);
			body = (
				<div className="container has-text-centered">
					<h1 className="title">Personal Publication</h1>
					<h2 className="subtitle">Online private personal journaling.</h2>
					<img className="Icon"  src="https://cdn.onlinewebfonts.com/svg/img_151301.png" /><br/>
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
					Screenshots</a>
					<a className="navbar-item" href="#"
					onClick={docClick}>
					Documentation</a>
				</div>
			);
			body = (
				<div className="container has-text-centered">
					<h1 className="title">Screenshots</h1>
					<div className="columns">
						<div className="column">
							<a href="https://ibb.co/nDicV0" target="_blank">
								<img src="https://preview.ibb.co/buht3L/Landing.jpg" alt="Landing" border="0" />
							</a>

						</div>
						<div className="column">
							<a href="https://ibb.co/iEH4A0" target="_blank">
								<img src="https://preview.ibb.co/dywaHf/Doc.jpg" alt="Doc" border="0" />
							</a>
						</div>
						<div className="column">
							<a href="https://ibb.co/kBZ6OL" target="_blank">
								<img src="https://preview.ibb.co/dskD3L/Login.jpg" alt="Login" border="0" />
							</a>
						</div>
					</div>
					<div className="columns">
						<div className="column">
							<a href="https://ibb.co/nfOpcf" target="_blank">
								<img src="https://preview.ibb.co/hvtBq0/Register.jpg" alt="Register" border="0" />
							</a>
						</div>
						<div className="column">
							<a href="https://ibb.co/fwzvHf" target="_blank">
								<img src="https://preview.ibb.co/dGfPA0/NewEntry.jpg" alt="NewEntry" border="0" />
							</a>
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
					Screenshots</a>
					<a className="navbar-item is-active" href="#"
					onClick={docClick}>
					Documentation</a>
				</div>
			)
			body = (
				<div className="container has-text-centered">
					<h1 className="title">Documentation</h1>
					<h2 className="subtitle">Made by: Kyle Stockmann</h2>
					<h2 className="subtitle">Summary:</h2>
					<h3 className="subtitle">
					My App, Personal Publication is a journaling app designed with ease of use in mind.<br />
					My idea with Personal Publication was to make a journal that anyone could use and private enough to replace the one under your bed.<br />
					I personally like to do private journaling to help my depression and as a way of understanding what is bothering me the most.
					</h3>
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
					<div id="navbarMenuHeroA" className="navbar-menu is-active">
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