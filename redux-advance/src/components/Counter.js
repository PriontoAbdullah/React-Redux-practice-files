import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/actions/counterAction';

const Counter = ({ increment, decrement, count }) => {
	return (
		<div>
			<h3> Counter: {count}</h3>
			<button onClick={() => increment(3)}>Increment</button>
			<button onClick={() => decrement(2)}>Decrement</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	count: state.counterReducer.count
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
