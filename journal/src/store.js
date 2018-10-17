import {createStore, combineReducers} from 'redux';
import authReducer from '~/reducers/auth';
import registerReducer from '~/reducers/register';

export default createStore(
	combineReducers({
		auth: authReducer,
		register: registerReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

