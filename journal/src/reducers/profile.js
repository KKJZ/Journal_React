import {
	REQUEST_ENTRIES,
	SET_ENTRIES,
	CLEAR_ENTRIES,
	ERROR_ENTRIES
} from '~/actions/profile';

const intitialState = {
	entries: null,
	entryLoading: false,
	entryError: null,
	editing: false,
	entry: {
		title: 'welcome',
		date: new Date().toString,
		content: 'test',
		userName: 'test'
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

		default:
			return state;
	}
}