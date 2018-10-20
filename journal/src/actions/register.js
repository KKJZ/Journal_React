export const SET_USERNAME_FIELD = 'SET_USERNAME_FIELD';
export const setUserNameField = userNameField => ({
	type: SET_USERNAME_FIELD,
	userNameField
});

export const SET_PASSWORD_FIELD = 'SET_PASSWORD_FIELD';
export const setPasswordField = passwordField => ({
	type: SET_PASSWORD_FIELD,
	passwordField
});

export const SET_CONFIRM_FIELD = 'SET_CONFIRM_FIELD';
export const setConfirmField = confirmField => ({
	type: SET_CONFIRM_FIELD,
	confirmField
});