import { decrement_value, increment_value } from '../types';

export const increment = (a) => {
	return {
		type: increment_value,
		payload: a
	};
};

export const decrement = (a) => {
	return {
		type: decrement_value,
		payload: a
	};
};
