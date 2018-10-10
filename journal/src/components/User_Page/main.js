import React from "react";

export default function Main(props) {
	return (
		<div className="user_page" role="User Page"
		// style="background: white"
		>
			<h1 className="title">title</h1>
			<h2 className="date">date</h2>
			<section className="content"
			// style="background: white"
			>
			
			</section>
			<button className="button is-success edit">Edit</button>
			<button className="button is-danger del">Delete</button>
		</div>
	)
}