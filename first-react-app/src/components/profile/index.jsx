import React, { Component } from 'react';
import './profile.style.css';

import Bio from './bio';
import Skills from './skills';
import Links from './links';

class Profile extends Component {
	profile = {
		name: 'Prionto Abullah',
		title: 'Fullstack Javascript Developer',
		skillA: 'Javascript',
		skillB: 'Python',
		skillC: 'Go Programming'
	};

	render() {
		return (
			<div className="App-header">
				<div className="Container">
					<Bio name={this.profile.name} title={this.profile.title} />
					<Skills skillA={this.profile.skillA} skillB={this.profile.skillB} skillC={this.profile.skillC} />
					<Links />
				</div>
			</div>
		);
	}
}

export default Profile;
