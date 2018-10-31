import {
	REQUEST_ENTRIES,
	SET_ENTRIES,
	CLEAR_ENTRIES,
	ERROR_ENTRIES,
	CHANGE_ENTRY,
	SET_EDIT,
	NEW_POST_REQUEST,
	CHANGE_TITLE,
	CHANGE_CONTENT,
	DELETE_ENTRY_REQUEST,
	FONT_COLOR,
	WINDOW_COLOR
} from '~/actions/profile';

let today = new Date().toString();

export const deafultEntry = {
		id: null,
		title: 'Welcome',
		date: today,
		content: 'Welcome to your new journal! to start go to the entries tab and select make a new entry!',
		userName: 'welcome',
		windowColor: '#ffffff',
		fontColor: '#000000',
		postFont: 'comicSansMS'
}

const intitialState = {
	entries: null,
	entryLoading: false,
	entryError: null,
	editing: false,
	editFColor: null,
	editWColor: null,
	entry: deafultEntry
}

export default function profileReducer(state=intitialState, action) {
	switch(action.type) {
		case REQUEST_ENTRIES:
			return Object.assign({}, state, {
				entryLoading: true,
				entryError: null
			});

		case SET_ENTRIES:
			return Object.assign({}, state, {
				entries: action.entries,
				entryLoading: false
			});

		case CLEAR_ENTRIES:
			return Object.assign({}, state, {
				entries: null
			});

		case ERROR_ENTRIES:
			return Object.assign({}, state, {
				entryLoading: false,
				entryError: action.error
			});

		case CHANGE_ENTRY:
			return Object.assign({}, state, {
				entryLoading: false,
				entry: action.entry
			});

		case SET_EDIT:
			return Object.assign({}, state, {
				editing: action.editing
			});

		case NEW_POST_REQUEST:
			return Object.assign({}, state, {
				entryLoading: true
			});

		case DELETE_ENTRY_REQUEST: 
			return Object.assign({}, state, {
				entryLoading: true
			});

		case CHANGE_TITLE:
			return Object.assign({}, state, {
				entry: {
					id: state.entry.id,
					title: action.title,
					date: state.entry.date,
					content: state.entry.content,
					userName: state.entry.userName
				}
			});

		case CHANGE_CONTENT:
			return Object.assign({}, state, {
				entry: {
					id: state.entry.id,
					title: state.entry.title,
					date: state.entry.date,
					content: action.content,
					userName: state.entry.userName
				}
			});

		case WINDOW_COLOR:
			return Object.assign({}, state, {
				editWColor: action.editWColor
			});

		case FONT_COLOR:
			return Object.assign({}, state, {
				editFColor: action.editFColor
			})
		default:
			return state;
	}
}