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

export const CHANGE_ENTRY = 'CHANGE_ENTRY';
export const changeEntry = entry => ({
	type: CHANGE_ENTRY,
	entry
});

export const SET_EDIT = 'SET_EDIT';
export const setEdit = editing => ({
	type: SET_EDIT,
	editing
});

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const changeTitle = title => ({
	type: CHANGE_TITLE,
	title
});

export const CHANGE_CONTENT = 'CHANGE_CONTENT';
export const changeContent = content => ({
	type: CHANGE_CONTENT,
	content
})

export const NEW_POST_REQUEST = 'NEW_POST_REQUEST';
export const newPostRequest = () => ({
	type: NEW_POST_REQUEST
});

export const postEntry = (title, content, token, userName, dispatch) => {
	dispatch(newPostRequest());
	return (
		fetch(`${API_BASE_URL}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `bearer ${token}`
			},
			body: JSON.stringify({
				title,
				content
			})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => {
			//res is entry, so set this entry
			dispatch(changeEntry(res));
			dispatch(setEdit(false));
			//then dispatch the new list of entries
			fetchEntries(userName, token, dispatch);
		})
	)
}

export const editEntry = (title, content, id, token, userName, dispatch) => {
	dispatch(newPostRequest());
	return (
		fetch(`${API_BASE_URL}/posts/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `bearer ${token}`
			},
			body: JSON.stringify({
				title,
				content
			})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => console.log(res))
		.then(res => {
			//refresh the entries
			fetchEntries(userName, token, dispatch);
			//change to edited entry
			dispatch(setEdit(false));
		})
	)
}

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