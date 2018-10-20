import {normalizeResponseErrors} from '~/actions/utils';
import {API_BASE_URL} from '~/config';

export const REQUEST_ENTRIES = 'REQUEST_ENTRIES';
export const requestEntries = () => ({
	type: REQUEST_ENTRIES
});

export const SET_ENTRIES = 'SET_ENTRIES';
export const setEntries = entries => ({
	type: SET_ENTRIES,
	entries
});

export const CLEAR_ENTRIES = 'CLEAR_ENTRIES';
export const clearEntries = () => ({
	type: CLEAR_ENTRIES
});

export const ERROR_ENTRIES = 'ERROR_ENTRIES';
export const errorEntries = error => ({
	type: ERROR_ENTRIES,
	error
});



export const fetchEntries = (userName, token, dispatch) => {
	dispatch(requestEntries());
	return (
		fetch(`${API_BASE_URL}/posts`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `bearer ${token}`
			}
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => dispatch(setEntries(res)))
		.catch(err => {
			const {code, status} = err;
			dispatch(errorEntries(code));
		})
	)
}