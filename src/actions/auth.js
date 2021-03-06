import jwtDecode from 'jwt-decode';
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
	type: AUTH_ERROR,
	error
});

export const AUTH_REFRESH = 'AUTH_REFRESH';
export const authRefresh = () => ({
	type: AUTH_REFRESH
});

export const AUTH_REFRESH_SUCCESS = 'AUTH_REFRESH_SUCCESS';
export const authRefreshSuccess =  () => ({
	type: AUTH_REFRESH_SUCCESS
})

//Store authtoken in state and localstorage, and decode and store user data in token
export function storeAuthInfo(authToken, dispatch){
	const decodedToken = jwtDecode(authToken);
	//call set action for token
	dispatch(setAuthToken(authToken));
	//action to show it was a success and set current user
	dispatch(authSuccess(decodedToken.userName));
	//saveAuthToken to localStorage
	saveAuthToken(authToken);
};

//trying to make it cleaner
export const fetchAuth = (userName, password, dispatch, option) => {
	//request auth
	dispatch(authRequest());
	return (
		fetch(`${API_BASE_URL}/${option}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userName,
				password
			})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => storeAuthInfo(res.token, dispatch))
		.catch(err => {
			const {code, status} = err;
			dispatch(authError(code));
		})
	)
}

//refresh function
export const refreshAuth = (token, dispatch) => {
	return (
		fetch(`${API_BASE_URL}/login/refresh`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `bearer ${token}`
			}
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => storeAuthInfo(res.token, dispatch))
		.then(res => dispatch(authRefreshSuccess()))
		.catch(err => {
			const {code, status} = err;
			dispatch(clearAuthToken());
		}) 
	)
}

