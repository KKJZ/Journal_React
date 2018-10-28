import 
	{
	SET_USERNAME_FIELD,
	SET_PASSWORD_FIELD,
	SET_CONFIRM_FIELD
} from '~/actions/register';
import {normalizeResponseErrors} from '~/actions/utils';

const intitialState = {
	userNameField: null,
	passwordField: null,
	confirmField: null
}

export default function registerReducer(state=intitialState, action) {
	switch(action.type) {
		case SET_USERNAME_FIELD:
			return Object.assign({}, state, {
				userNameField: action.userNameField
			});
		case SET_PASSWORD_FIELD:
			return Object.assign({}, state, {
				passwordField: action.passwordField
			});
		case SET_CONFIRM_FIELD:
			return Object.assign({}, state, {
				confirmField: action.confirmField
			});
		default:
			return state;
	}
}