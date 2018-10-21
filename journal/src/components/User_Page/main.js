import React from "react";
import {connect} from 'react-redux';

export function Main(props) {
	console.log(props)
	let Title = props.entry.title;
	let __Date = new Date.toString;
	let Content = props.entry.content;
	return (
		<div className="user_page" role="User Page"
		// style="background: white"
		>
			<h1 className="title">{Title}</h1>
			<h2 className="date">{__Date}</h2>
			<section className="content"
			// style="background: white"
			>
			{Content}
			</section>
			<button className="button is-success edit">Edit</button>
			<button className="button is-danger del">Delete</button>
		</div>
	)
}

const mapStateToProps = state => ({
	entry: state.profile.entry
})

export default connect(mapStateToProps)(Main)