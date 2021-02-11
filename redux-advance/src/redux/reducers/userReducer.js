import { get_user_failed, get_user_success, users_request } from '../types';

const initialState = {
	loading: false,
	users: [],
	error: ''
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case users_request:
			return {
				...state,
				loading: true
			};

		case get_user_success:
			return {
				...state,
				loading: false,
				users: action.payload
			};

		case get_user_failed:
			return {
				...state,
				loading: false,
				users: [],
				error: action.payload
			};

		default:
			return state;
	}
};

export default userReducer;
