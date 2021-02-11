import axios from 'axios';
import { get_user_failed, get_user_success, users_request } from '../types';

export const userList = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: users_request
			});

			const res = await axios.get('https://jsonplaceholder.typicode.com/users');
			console.log(res.data);

			dispatch({
				type: get_user_success,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: get_user_failed,
				payload: error.message
			});
		}
	};
};
