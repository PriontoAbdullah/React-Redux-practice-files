import React, { Component } from 'react';
import Profile from './profile/index';
import Skills from './profile/skills';
import MyProps from './props/index';
import Bio from './profile/bio';
import Parent from './props/FuncProps';
import Inputs from './inputs/index';
import Form from './inputs/form';
import ReactForm from './React-form';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Profile />

				<div className="App-header">
					<Bio name="Test User" title="Test Title" />
					<h3>List of Programmers</h3>
					<MyProps name="Abdul Ali" />
					<Skills skillA="React" skillB="Angular" skillC="Vue" />
					<MyProps name="Jodu Mia" />
					<Skills skillA="NodeJS" skillB="ExpressJS" skillC="MongoDB" />
					<Parent />
				</div>

				<div className="container col-md-6">
					<hr />
					<h2 className="my-4">Working with Forms in React</h2>
					<hr />
					<Inputs />
					<Form />
					<ReactForm />
				</div>
			</div>
		);
	}
}

export default App;
