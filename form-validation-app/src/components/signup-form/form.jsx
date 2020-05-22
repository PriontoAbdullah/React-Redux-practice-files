import React from 'react';
import TextInput from './text-input';
import PropTypes from 'prop-types';

const Form = ({ values, agreement, errors, handleChange, handleAgreement, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<TextInput
				name="name"
				label="Enter Name"
				placeholder="John son"
				value={values.name}
				error={errors.name}
				onChange={handleChange}
			/>
			<TextInput
				name="email"
				type="email"
				label="Enter Email"
				placeholder="john@example.com"
				value={values.email}
				error={errors.email}
				onChange={handleChange}
			/>
			<TextInput
				name="password"
				type="password"
				label="Enter Password"
				placeholder="********"
				value={values.password}
				error={errors.password}
				onChange={handleChange}
			/>
			<TextInput
				name="birthDate"
				type="date"
				label="Enter Birth date"
				placeholder="Enter Birth date"
				value={values.birthDate}
				error={errors.birthDate}
				onChange={handleChange}
			/>
			<div className="form-check form-check-inline">
				<input className="form-check-input" type="radio" name="gender" value="Male" onChange={handleChange} />
				<label className={errors.gender ? 'form-check-label mr-4 is-invalid' : 'form-check-label mr-4'}>
					Male
				</label>
				<input className="form-check-input" type="radio" name="gender" value="Female" onChange={handleChange} />
				<label className={errors.gender ? 'form-check-label is-invalid' : 'form-check-label'}>Female</label>
				{errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
			</div>
			<div className="form-check my-3">
				<input
					className="form-check-input"
					type="checkbox"
					name="agreement"
					checked={agreement}
					onChange={handleAgreement}
				/>
				<label className="form-check-label">I agree</label>
			</div>
			<button className="btn btn-primary" type="submit" disabled={!agreement}>
				Sign up
			</button>
		</form>
	);
};

Form.propTypes = {
	values: PropTypes.object.isRequired,
	agreement: PropTypes.bool.isRequired,
	errors: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleAgreement: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default Form;
