export const saveAuthToken = authToken => {
	try {
		localStorage.setItem('authToken', authToken);
	} catch (e) {

	}
};

export const loadAuthToken = () => {
	return localStorage.getItem('authToken');
};

export const removeAuthToken = () => {
	try {
		localStorage.removeItem('authToken');
	} catch (e) {
		
	}
};