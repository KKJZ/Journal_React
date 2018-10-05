import React from 'react';

export default function Landing(props) {
	return (
		<!DOCTYPE html>
<html>
<head>
	<title>Journal</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Bulma -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
	<!-- Font Awesome Icons for Bulma -->
	<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
	<link rel="stylesheet" type="text/css" href="landing.css">
	<!-- Jquery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
<section class="hero is-primary is-fullheight">
	<!-- hero head: stick at the top -->
	<div class="hero-head">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a class="navbar-item" href="#">Personal Publication</a>
				</div>
				<div id="navbarMenuHeroA" class="navbar-menu">
					<div class="navbar-end">
						<a class="navbar-item is-active" href="#">
						Home</a>
						<a class="navbar-item" href="#">
						Examples</a>
						<a class="navbar-item" href="#">
						Documentation</a>
					</div>
				</div>
			</div>
		</nav>
	</div>
	<div class="hero-body">
		<div class="container has-text-centered">
			<h1 class="title">Personal Publication</h1>
			<h2 class="subtitle">Never forget your journal again.</h2>
			<a class="button is-large is-info" href="#">Check it out!</a>
		</div>
	</div>
</section>
</body>
</html>
	)
}