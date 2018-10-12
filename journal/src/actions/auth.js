import jwtDecode from 'jwt-decode';
//npm i jwt-decode
import {normalizeResponseErrors} from '~/actions/utils';
import {saveAuthToken, removeAuthToken} from '~/localstorage';
import {API_BASE_URL} from '~/config';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuthToken = () => ({
	type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
	type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
	type: AUTH_SUCCESS,
	currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
	type:AUTH_ERROR,
	error
});

//Store authtoken in state and localstorage, and decode and store user data in token
export const storeAuthInfo = (authToken, dispatch) => {
	const decodedToken = jwtDecode(authtoken);
	//call set action for token
	dispatch(setAuthToken(authtoken));
	//action to show it was a success and set current user
	dispatch(authSuccess(decodedToken.userName));
	//saveAuthToken to localStorage
	saveAuthToken(authToken);
};

export const login = (userName, password) => dispatch => {
	//request auth
	console.log('hi');
	dispatch(authRequest());
	return (
		fetch(`${API_BASE_URL}/login`, {
			method: 'POST',
			header: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userName,
				password
			})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({authToken}) => storeAuthInfo(authToken, dispatch))
		.catch(err => {
			const {code} = err;
			console.log(err);
			dispatch(authError(err));
		})
	)
}

