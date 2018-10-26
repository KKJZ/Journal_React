import React from "react";
import {connect} from 'react-redux';
import {postEntry, setEdit, editEntry, changeTitle, changeContent, deleteEntry} from '~/actions/profile';

export function Main(props) {
	const postProxy = (e) => {
		e.preventDefault();
		let title = e.target[0].value;
		let content = e.target[1].value;
		postEntry(title, content, props.authToken, props.currentUser, props.dispatch);
	}
	const putProxy = (e) => {
		e.preventDefault();
		let title = e.target[0].value;
		let content = e.target[1].value;
		editEntry(title, content, props.entry.id, props.authToken, props.currentUser, props.dispatch)
	}

	let Title = props.entry.title;
	let __Date = props.entry.date;
	let Content = props.entry.content;
	let editing;
	let options;
	if (props.entry.userName !== 'welcome') {
		options =(
		<div className="wrapper"> 
			<button className="button is-success edit" onClick={() => props.dispatch(setEdit(true))}>Edit</button>
			<button className="button is-danger del" onClick={()=> deleteEntry(props.currentUser, props.entry.title, props.entry.id, prop.authToken, props.dispatch)}>Delete</button>
		</div>
		)
	}
	if (props.editing === true && props.entry.title === null) {
		return ( 
		<div className="user_page" role="User Page">
			<form htmlFor="Post" id="post" 
			onSubmit={postProxy}>
				<div className="field">
					<label className="label editing">Title</label>
					<div>
						<input className="input" type="text" placeholder="Title" />
					</div>
				</div>
				<div className="field">
					<label className="label editing">Content</label>
					<div>
						<textarea className="textarea" placeholder="Type your entry here!" />
					</div>
				</div>
				<div className="field is-grouped is-grouped-centered">
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
	} else if (props.editing === true) {
		//post editting in here
		return ( 
		<div className="user_page" role="User Page">
			<form htmlFor="Post" id="post" 
			onSubmit={putProxy}>
				<div className="field">
					<label className="label editing">Title</label>
					<div>
						<input 
						className="input" 
						type="text" 
						placeholder="Title" 
						value={props.entry.title}
						onChange={e => props.dispatch(changeTitle(e.target.value))} />
					</div>
				</div>
				<div className="field">
					<label className="label editing">Content</label>
					<div>
						<textarea 
						className="textarea" 
						placeholder="Type your entry here!" 
						value={props.entry.content}
						onChange={e => props.dispatch(changeContent(e.target.value))} />
					</div>
				</div>
				<div className="field is-grouped is-grouped-centered">
					<div className="control">
						<button className="button is-link">Submit</button>
					</div>
					<div className="control">
						<button className="button is-text"
						onClick={() => props.dispatch(setEdit(false))}>Cancel</button>
					</div>
				</div>
			</form>
		</div>
		)
	}
	//editting false
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
			{options}
		</div>
	)
}

const mapStateToProps = state => ({
	authToken: state.auth.authToken,
	currentUser: state.auth.currentUser,
	entry: state.profile.entry,
	editing: state.profile.editing
})

export default connect(mapStateToProps)(Main)