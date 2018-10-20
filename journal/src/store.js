import {createStore, combineReducers} from 'redux';
import authReducer from '~/reducers/auth';
import registerReducer from '~/reducers/register';
import profileReducer from '~/reducers/profile';

export default createStore(
	combineReducers({
		auth: authReducer,
		register: registerReducer,
		profile: profileReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

