import React from "react";
import '~/fonts.css';
import {connect} from 'react-redux';
import {
	postEntry,
	setEdit,
	editEntry,
	changeTitle,
	changeContent,
	deleteEntry,
	changeWindowColor,
	changeFontColor,
	changeEntry,
	defaultEntry
} from '~/actions/profile';

export function Main(props) {
	const postProxy = (e) => {
		e.preventDefault();
		let title = e.target[0].value;
		let content = e.target[1].value;
		let windowColor = e.target[2].value;
		let fontColor = e.target[3].value;
		let postFont = e.target[4].value;
		postEntry(title, content, windowColor, fontColor, postFont, props.authToken, props.currentUser, props.dispatch);
	}

	const putProxy = (e) => {
		e.preventDefault();
		let title = e.target[0].value;
		let content = e.target[1].value;
		let windowColor = e.target[2].value;
		let fontColor = e.target[3].value;
		let postFont = e.target[4].value;
		editEntry(title, content, windowColor, fontColor, postFont, props.entry.id, props.authToken, props.currentUser, props.dispatch)
	}

	let userPageClasses = "user_page" + " " + props.entry.postFont;
	let color = {
			"backgroundColor": props.entry.windowColor,
			"color": props.entry.fontColor
		}  

	let Title = props.entry.title;
	let __Date = props.entry.date;
	let Content = props.entry.content;
	let editing;
	let options;
	let help;
	let submit;
	if (props.editWColor === props.editFColor) {
		help = (
			<p className="help">Window and Font colors can't match.</p>
		)
		submit = (
			<div className="control">
				<button className="button is-link" disabled>Submit</button>
			</div>
		) 
	};

	if (props.editWColor !== props.editFColor){
		help;
		submit = (
			<div className="control">
				<button className="button is-link">Submit</button>
			</div>
		)
	};
	
	if (props.entry.userName !== 'welcome') {
		options =(
		<div className="wrapper"> 
			<button className="button is-success edit" onClick={() => props.dispatch(setEdit(true))}>Edit</button>
			<button className="button is-danger del" onClick={()=> deleteEntry(props.currentUser, props.entry.title, props.entry.id, props.authToken, props.dispatch)}>Delete</button>
		</div>
		)
	}
	if (props.editing === true && props.entry.title === null) {
		return ( 
		<div className="user_page user_page_edit" role="User Page">
			<form htmlFor="Post" id="post" 
			onSubmit={postProxy}>
				<div className="field">
					<label className="label editing">Title</label>
					<div className="title">
						<input className="title input" type="text" placeholder="Title" />
					</div>
				</div>
				<div className="field">
					<label className="label editing">Content</label>
					<div className="content">
						<textarea className="textarea" placeholder="Type your entry here!" />
					</div>
				</div>
				<div className="field">
					<label className="label editing">Window Color</label>
					<div className="color">
						<input type="color" className="color"
						onChange={e => props.dispatch(changeWindowColor(e.target.value))}/>
					</div>
				</div>
				<div className="field">
					<label className="label editing">Font Color</label>
					<div className="color">
						<input type="color" className="color"
						onChange={e => props.dispatch(changeFontColor(e.target.value))}/>
					</div>
					{help}
				</div>
				<div className="field font">
					<label className="label editing">Font</label>
					<div className="select is-medium">
						<select>
							<option value="airal" className="airal">Airal</option>
							<option value="timesNewRoman" className="timesNewRoman">Times New Roman</option>
							<option value="courier" className="courier">Courier</option>
							<option value="verdana" className="verdana">Verdana</option>
							<option value="georgia" className="georgia">Georgia</option>
							<option value="palatino" className="palatino">Palatino</option>
							<option value="comicSansMS" className="comicSansMS">Comic Sans MS</option>
							<option value="trebuchetMS" className="trebuchetMS">Trebuchet MS</option>
							<option value="airalBlack" className="airalBlack">Arial Black</option>
							<option value="impact" className="impact">Impact</option>
						</select>
					</div>
				</div>
				<div className="field is-grouped is-grouped-centered">
					{submit}
					<div className="control">
						<button className="button is-text"
						onClick={() => {
							props.dispatch(setEdit(false))
							props.dispatch(changeEntry(defaultEntry))
						}}>Cancel</button>
					</div>
				</div>
			</form>
		</div>
		)
	} else if (props.editing === true) {
		//post editting in here
		return ( 
		<div className="user_page user_page_edit" role="User Page">
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
				<div className="field">
					<label className="label editing">Window Color</label>
					<div className="color">
						<input type="color" className="color"
						onChange={e => props.dispatch(changeWindowColor(e.target.value))}/>
					</div>
				</div>
				<div className="field">
					<label className="label editing">Font Color</label>
					<div className="color">
						<input type="color" className="color"
						onChange={e => props.dispatch(changeFontColor(e.target.value))}/>
					</div>
					{help}
				</div>
				<div className="field font">
					<label className="label editing">Font</label>
					<div className="select is-medium">
						<select>
							<option value="airal" className="airal">Airal</option>
							<option value="timesNewRoman" className="timesNewRoman">Times New Roman</option>
							<option value="courier" className="courier">Courier</option>
							<option value="verdana" className="verdana">Verdana</option>
							<option value="georgia" className="georgia">Georgia</option>
		 						<option value="palatino" className="palatino">Palatino</option>
							<option value="comicSansMS" className="comicSansMS">Comic Sans MS</option>
							<option value="trebuchetMS" className="trebuchetMS">Trebuchet MS</option>
							<option value="airalBlack" className="airalBlack">Arial Black</option>
							<option value="impact" className="impact">Impact</option>
						</select>
					</div>
				</div>
				<div className="field is-grouped is-grouped-centered">
					{submit}
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
		<div className={userPageClasses} role="User Page"
		style={color}
		>
			<h1 className="title">{Title}</h1>
			<h2 className="date">{__Date}</h2>
			<section className="content">
			{Content}
			</section>
			{options}
		</div>
	)
}

const mapStateToProps = state => ({
	editWColor: state.profile.editWColor,
	editFColor: state.profile.editFColor,
	authToken: state.auth.authToken,
	currentUser: state.auth.currentUser,
	entry: state.profile.entry,
	editing: state.profile.editing
})

export default connect(mapStateToProps)(Main)