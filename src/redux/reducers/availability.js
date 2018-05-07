import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function availability(state = initialState, action) {
	switch (action.type) {
	// case types.FETCH_AVAILABILITY:
	// 	return [
	// 		...state,
	// 		Object.assign({}, action.availableSlots),
	// 	];
	case types.RECEIVED_AVAILABILITY:
		return Object.assign({}, state, {
			availableSlots: action.availableSlots,
		});
	default:
		return state;
	}
}
