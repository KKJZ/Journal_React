import React from "react";
import {connect} from 'react-redux';

export function Main(props) {
	let Title = props.entry.title;
	let __Date = props.entry.date;
	let Content = props.entry.content;
	let editing;
	if (props.editing === true) {
		return ( 
		<div className="user_page" role="User Page">
			<form htmlFor="Post" id="post" 
			onSubmit={e => console.log(e)}>
				<div className="field">
					<label className="label">Title</label>
					<div>
						<input className="input" type="text" placeholder="Title" />
					</div>
				</div>
				<div className="field">
					<label className="label">Content</label>
					<div>
						<textarea className="textarea" placeholder="Type your entry here!" />
					</div>
				</div>
				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Submit</button>
					</div>
					<div className="control">
						<button className="button is-text">Cancel</button>
					</div>
				</div>
			</form>
		</div>
		)
	} else
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
	entry: state.profile.entry,
	editing: state.profile.editing
})

export default connect(mapStateToProps)(Main)