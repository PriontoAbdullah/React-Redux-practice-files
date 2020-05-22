import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';

const Formjsx = (props) => (
	<form onSubmit={props.handleSubmit}>
		<TextInput
			name="name"
			label="Enter Name"
			placeholder="John son"
			value={props.values.name}
			onChange={props.handleChange}
		/>
		<TextInput
			name="email"
			type="email"
			label="Enter Email"
			placeholder="john@example.com"
			value={props.values.email}
			onChange={props.handleChange}
		/>
		<TextInput
			name="password"
			type="password"
			label="Enter Password"
			placeholder="********"
			value={props.values.password}
			onChange={props.handleChange}
		/>

		<button className="btn btn-dark" type="submit">
			Submit
		</button>
	</form>
);

Formjsx.propTypes = {
	values: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default Formjsx;
