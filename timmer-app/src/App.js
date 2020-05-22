import React from 'react';
import './App.css';
import Css from './button.module.css';

class App extends React.Component {

	state = {
		count: 0
	}

	intervalId = null;

	incrementCount = () => {
		this.setState({ count: this.state.count + 1 })
	};

	decrementCount = () => {
		if (this.state.count > 0) {
			this.setState({ count: this.state.count - 1 })
		}
	};

	startTime = () => {
		if (this.state.count > 0 && !this.intervalId) {
			this.intervalId = setInterval(() => {
				this.setState({ count: this.state.count - 1 }, () => {
					if (this.state.count === 0) {
						alert('Timer Finished');
						clearInterval(this.intervalId);
						this.intervalId = null;
					}
				});
			}, 1000);
		}
	};

	stopTimer = () => {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	};

	resetTimer = () => {
		this.setState({ count: 0 })
		clearInterval(this.intervalId);
		this.intervalId = null;
	};

	changeTime = event => {

		this.setState({ count: event.target.value }) // two way data binding
	};

	handleFocus = event => console.log('I am Focus');

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="heading"> Simple Timer</h1>
					<div className="Container">
						<input className="inputField" type='number'
							placeholder="Enter Second" onChange={this.changeTime} onFocus={this.handleFocus} />
						{/* value={this.state.count} */}
					</div>
					<div className="Container">
						<button className={Css.button} onClick={this.decrementCount}>
							<span className={Css.text}>-</span> </button>

						{this.state.count > -1 &&
							<span className="Text">{this.state.count}</span>}

						<button className={Css.button} onClick={this.incrementCount}>
							<span className={Css.text}>+</span> </button>
					</div>
					<div className="Container">
						<button className="Btn" onClick={this.startTime}>Start</button>
						<button className="Btn" onClick={this.stopTimer}>Stop</button>
						<button className="Btn" onClick={this.resetTimer}>Reset</button>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
