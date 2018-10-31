import {HOME, EXAMPLE, DOCUMENTAION} from '~/actions/landing';

const initialState = {
	active: HOME
};

export default function landingReducer(state=initialState, action) {
	switch(action.type){
		case HOME:
			return Object.assign({}, state, {
				active: HOME
			})

		case EXAMPLE:
			return Object.assign({}, state, {
				active: EXAMPLE
			})

		case DOCUMENTAION:
			return Object.assign({}, state, {
				active: DOCUMENTAION
			})

		default:
			return state;
	}
}