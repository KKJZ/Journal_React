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
	DELETE_ENTRY_REQUEST
} from '~/actions/profile';

let today = new Date().toString();

const intitialState = {
	entries: null,
	entryLoading: false,
	entryError: null,
	editing: false,
	entry: {
		id: null,
		title: 'welcome',
		date: today,
		content: 'test',
		userName: 'welcome'
	}
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
			})

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
			})

		default:
			return state;
	}
}