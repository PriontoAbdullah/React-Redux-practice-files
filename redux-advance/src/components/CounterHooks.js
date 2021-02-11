import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/actions/counterAction';

const CounterHooks = () => {

	const count = useSelector((state) => state.counterReducer.count);
	const dispatch = useDispatch();

	return (
		<div>
			<h3> Counter: {count}</h3>
			<button onClick={() => dispatch(increment(7))}>Increment</button>
			<button onClick={() => dispatch(decrement(5))}>Decrement</button>
		</div>
	);
};

export default CounterHooks;
