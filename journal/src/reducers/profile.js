import {
	REQUEST_ENTRIES,
	SET_ENTRIES,
	CLEAR_ENTRIES,
	ERROR_ENTRIES,
	CHANGE_ENTRY,
	SET_EDIT
} from '~/actions/profile';

let today = new Date().toString();

const intitialState = {
	entries: null,
	entryLoading: false,
	entryError: null,
	editing: false,
	entry: {
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
				entry: action.entry
			});

		case SET_EDIT:
			return Object.assign({}, state, {
				editing: action.editing
			})
		default:
			return state;
	}
}