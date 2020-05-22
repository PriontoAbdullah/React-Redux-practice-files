import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => (
	<div className="form-group">
		<label htmlFor={props.name}>{props.label}</label>
		<input
			className="form-control my-2"
			type={props.type}
			name={props.name}
			value={props.value}
			id={props.name}
			onChange={props.onChange}
			placeholder={props.placeholder}
		/>
	</div>
);

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

TextInput.defaultProps = {
	type: 'text',
	label: '',
	placeholder: ''
};

export default TextInput;
