import React, { Component } from 'react';
import Formjsx from './FormJsx';

class ReactForm extends Component {
	state = {
		name: '',
		email: '',
		password: ''
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		console.log(this.state);
		event.target.reset();
		this.setState({
			name: '',
			email: '',
			password: ''
		});
	};

	render() {
		return (
			<div>
				<hr />
				<h2 className="my-3">React Form Handling</h2>
				<hr />
				<Formjsx values={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default ReactForm;
