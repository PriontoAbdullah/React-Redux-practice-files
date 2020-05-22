import React, { Component } from 'react';

class Child extends Component {
	render() {
		this.props.func(this);
		return <h3>I am Child</h3>;
	}
}

const ChildComponent = (props) => {
	return (
		<div>
			<h3> I am Child Component</h3>
			<p> I don't know what to do</p>
			{props.children}
		</div>
	);
};

class Parent extends Component {
	getContext(context) {
		console.log(context);
	}

	render() {
		// this.getContext(this);
		return (
			<div className="App-header">
				<div className="Container-func">
					<h1>Pass Function As Props</h1>
					<Child func={this.getContext} />
					<ChildComponent>
						<h3>Hello, I am from Parent</h3>
						<h4>I am Child of Child Component</h4>
					</ChildComponent>
				</div>
			</div>
		);
	}
}

export default Parent;
