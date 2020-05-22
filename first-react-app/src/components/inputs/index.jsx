import React, { Component } from 'react';

class Inputs extends Component {
	state = {
		name: '',
		country: '',
		bio: '',
		birthDate: '',
		gender: '',
		agree: false,
		skills: []
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleCheckbox = (event) => {
		this.setState({
			agree: event.target.checked
		});
	};

	handleSkillChange = (event) => {
		if (event.target.checked) {
			this.setState({
				skills: [ ...this.state.skills, event.target.value ]
			});
		} else {
			const skills = this.state.skills.filter((skill) => skill != event.target.value);
			this.setState({ skills });
		}
	};

	render() {
		const { name, country, bio, birthDate, gender, agree, skills } = this.state;
		return (
			<div>
				<input
					type="text"
					className="form-control my-2"
					name="name"
					placeholder="Input Name"
					onChange={this.handleChange}
					value={name}
				/>
				<select className="form-control my-2" name="country" onChange={this.handleChange} value={country}>
					<option>Select Country</option>
					<option value="Bangladesh">Bangladesh</option>
					<option value="India">India</option>
					<option value="Pakistan">Pakistan</option>
					<option value="Srilanka">Srilanka</option>
				</select>
				<textarea
					className="form-control my-2"
					name="bio"
					id=""
					cols="30"
					rows="3"
					placeholder="Tell me about your self"
					onChange={this.handleChange}
					value={bio}
				/>
				<input
					className="form-control my-2"
					type="date"
					name="birthDate"
					placeholder="Inter your Birth date"
					onChange={this.handleChange}
					value={birthDate}
				/>
				<div>
					<input type="radio" name="gender" value="Male" onChange={this.handleChange} className="mx-2" />
					Male
					<input type="radio" name="gender" value="Female" onChange={this.handleChange} className="mx-2" />
					Female
					<input type="radio" name="gender" value="Other" onChange={this.handleChange} className="mx-2" />
					Other
				</div>
				<div>
					Skills:
					<input
						type="checkbox"
						name="skills"
						value="Java"
						checked={skills.includes('Java')}
						onChange={this.handleSkillChange}
						className="mx-2"
					/>
					Java
					<input
						type="checkbox"
						name="skills"
						value="GoLang"
						checked={skills.includes('GoLang')}
						onChange={this.handleSkillChange}
						className="mx-2"
					/>
					GoLang
					<input
						type="checkbox"
						name="skills"
						value="Python"
						checked={skills.includes('Python')}
						onChange={this.handleSkillChange}
						className="mx-2"
					/>
					Python
					<input
						type="checkbox"
						name="skills"
						value="JavaScript"
						checked={skills.includes('JavaScript')}
						onChange={this.handleSkillChange}
						className="mx-2"
					/>{' '}
					JavaScript
				</div>
				<div>
					<input type="checkbox" name="agree" checked={agree} onChange={this.handleCheckbox} /> I agree to all
					the terms and conditions
				</div>
				<button className="btn btn-primary my-2" onClick={() => console.log(this.state)}>
					Show Data
				</button>
			</div>
		);
	}
}

export default Inputs;
