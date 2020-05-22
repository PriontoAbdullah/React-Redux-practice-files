import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupForm from './components/signup-form/index';

class App extends React.Component {
  state = {
    users: []
  }

  createUser = user => {
    user.id = new Date().getTime().toString();
    this.setState({
      users: [...this.state.users, user]
    })
  }

  render() {
    return (

      <div className="container-fluid col-md-6">
        <div>
          <SignupForm createUser={this.createUser} />
        </div>

        <div>
          <h3 className='my-4'> All Registered Users</h3>
          <p><small>State Lifting</small></p>
          <ul className='list-group'>
            {this.state.users.map(user => (
              <li key={user.id} className='list-group-item'>
                ID: {user.id}: {user.name} -> {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
