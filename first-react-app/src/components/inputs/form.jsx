import React, { Component } from 'react';

class Form extends Component {
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
		const { name, email, password } = this.state;
		return (
			<div>
				<hr />
				<h2 className="my-3">Form Handling</h2>
				<hr />
				<form onSubmit={this.handleSubmit}>
					<input
						className="form-control my-2"
						type="text"
						name="name"
						value={name}
						onChange={this.handleChange}
						placeholder="Enter Name"
					/>
					<input
						className="form-control my-2"
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						placeholder="Enter Email"
					/>
					<input
						className="form-control my-2"
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						placeholder="Enter Password"
					/>
					<button className="btn btn-success" type="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Form;
