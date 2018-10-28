import {
	SET_AUTH_TOKEN,
	CLEAR_AUTH,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_ERROR,
	AUTH_REFRESH,
	AUTH_REFRESH_SUCCESS
} from '~/actions/auth';

const intitialState = {
	authToken: null,
	currentUser: null,
	loading: false,
	error: null,
	refresh: true
}

export default function authReducer(state=intitialState, action) {
	switch(action.type) {
		case SET_AUTH_TOKEN:
			return Object.assign({}, state, {
				authToken: action.authToken
			});

		case CLEAR_AUTH:
			return Object.assign({}, state, {
				authToken: null,
				currentUser: null
			});

		case AUTH_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: null
			});

		case AUTH_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				currentUser: action.currentUser
			});

		case AUTH_ERROR:
			return Object.assign({}, state, {
				loading: false,
				error: action.error
			});

		case AUTH_REFRESH:
			return Object.assign({}, state, {
				loading: true,
				refresh: true
			})

		case AUTH_REFRESH_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				refresh: false
			})
		default:
			return state;
	}
}