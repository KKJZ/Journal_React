import jwtDecode from 'jwt-decode';
import {normalizeResponseErrors} from '~/actions/utils';
import {authRequest, setAuthToken} from '~/actions/auth';
import storeAuthInfo from '~/actions/auth';
import {saveAuthToken, removeAuthToken} from '~/localstorage';
import {API_BASE_URL} from '~/config';

export default function fetchRegister(userName, password, dispatch) {
	console.log(userName, password);
	dispatch(authRequest());
	return fetch(`${API_BASE_URL}/register`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			userName,
			password
		})
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(res => {
		// storeAuthInfo(res.token, dispatch)
		const authToken = res.token;
		const decodedToken = jwtDecode(authToken);
		console.log(decodedToken);
		dispatch(setAuthToken(authToken));
		dispatch(authSuccess(decodedToken.userName));
	})
	.catch(err => {
		const {code, status} = err;
		console.log(code, status);
		dispatch(authError(code));
	})
}