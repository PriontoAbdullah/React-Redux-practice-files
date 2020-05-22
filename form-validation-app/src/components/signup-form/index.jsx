import React, { Component } from 'react';
import Form from './form';
import PropTypes from 'prop-types';

const initValues = {
	name: '',
	email: '',
	password: '',
	birthDate: '',
	gender: ''
};

class SignupForm extends Component {
	state = {
		values: initValues,
		agreement: false,
		errors: {}
	};

	handleChange = (event) => {
		this.setState({
			values: {
				...this.state.values,
				[event.target.name]: event.target.value
			}
		});
	};

	handleAgreement = (event) => {
		this.setState({
			agreement: event.target.checked
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { isValid, errors } = this.validate();

		if (isValid) {
			console.log(this.state.values);
			this.props.createUser(this.state.values);

			event.target.reset();
			this.setState({ values: initValues, agreement: false, errors: {} });
		} else {
			console.log(errors);
			this.setState({ errors });
		}
	};

	validate = () => {
		const errors = {};
		const { values: { name, email, password, birthDate, gender } } = this.state;
		if (!name) {
			errors.name = 'Please provide your Name';
		} else if (name.length > 30) {
			errors.name = 'Name Must be between 5-20 characters';
		}

		if (!email) {
			errors.email = 'Please provide your Email';
		}

		if (!password) {
			errors.password = 'Please provide your Password';
		} else if (password.length < 7) {
			errors.password = 'Password Must be between 8-20 characters';
		}

		if (!birthDate) {
			errors.birthDate = 'Please provide your Birth date';
		}

		if (!gender) {
			errors.gender = 'Please select your Gender';
		}

		return {
			errors,
			isValid: Object.keys(errors).length === 0 // Object.keys(errors) return an array
		};
	};

	render() {
		return (
			<div>
				<h1>Signup Form</h1>
				<Form
					values={this.state.values}
					agreement={this.state.agreement}
					errors={this.state.errors}
					handleChange={this.handleChange}
					handleAgreement={this.handleAgreement}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

SignupForm.propTypes = {
	createUser: PropTypes.func.isRequired
};

export default SignupForm;
