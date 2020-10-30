import React, { useState } from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
  })

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        // const token = result.credential.accessToken;
        const { displayName, photoURL, email } = result.user;
        // console.log(displayName, photoURL, email);
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }

        setUser(signedInUser);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(result => {
        const signOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: '',
          error: '',
          password: '',
          isValid: false,
          existingUser: false
        }

        setUser(signOutUser);
      })
      .catch(error => {
        console.log(error.message);
      })
  }


  // check validation by Regex
  const is_valid_email = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);

  const is_valid_password = password => /d/.test(password);

  const switchForm = e => {
    const createdUser = { ...user };
    createdUser.existingUser = e.target.checked;
    setUser(createdUser);
    // console.log(e.target.checked)
  }

  const handleChange = event => {
    // console.log(event.target.name, event.target.value);
    const newUserInfo = {
      ...user
    };

    // debugger;
    // perform validation
    let isValid = true;
    if (event.target.name === "email") {
      isValid = is_valid_email(event.target.value);
    }
    if (event.target.name === "password") {
      isValid = event.target.value.length > 8 && is_valid_password(event.target.value);
    }

    newUserInfo[event.target.name] = event.target.value;
    newUserInfo.isValid = isValid;
    setUser(newUserInfo);
  }

  const createAccount = (event) => {

    if (user.isValid) {
      // console.log(user.email, user.password);
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(result => {
          console.log(result);
          const createdUser = { ...user };
          createdUser.isSignedIn = true;
          createdUser.error = '';
          setUser(createdUser);
        })
        .catch(error => {
          console.log(error.message);
          const createdUser = { ...user };
          createdUser.isSignedIn = false;
          createdUser.error = error.message;
          setUser(createdUser);
        })
    }
    else {
      console.log('Form is not valid!');
    }
    event.preventDefault();
    event.target.reset();
  }

  const signInUser = event => {

    if (user.isValid) {
      // console.log(user.email, user.password);
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(result => {
          console.log(result);
          const createdUser = { ...user };
          createdUser.isSignedIn = true;
          createdUser.error = '';
          setUser(createdUser);
        })
        .catch(error => {
          console.log(error.message);
          const createdUser = { ...user };
          createdUser.isSignedIn = false;
          createdUser.error = error.message;
          setUser(createdUser);
        })
    }

    event.preventDefault();
    event.target.reset();
  }


  return (
    <div className="App">
      <h3>Google Authentication</h3>
      {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign out</button> :
          <button onClick={handleSignIn}>Sign in</button>
      }
      {
        user.isSignedIn && <div>
          <h3>Welcome, {user.name}</h3>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="User Pic" />
        </div>
      }
      <h3>Our own Authentication</h3>

      <label htmlFor="switchForm"> Returning User      </label>
      <input type="checkbox" name="switchForm" onChange={switchForm} id='switchForm' />
      <br />
      <form style={{ display: user.existingUser ? 'none' : 'block' }} onSubmit={createAccount}>
        <input type="text" name="name" placeholder="Your Name" onBlur={handleChange} required />
        <br />
        <input type="text" name="email" placeholder="Your Email" onBlur={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="your Password" onBlur={handleChange} required />
        <br />
        <input type="submit" value="Create Account" />
      </form>
      {
        user.error && <p style={{ color: 'red' }}>{user.error}</p>
      }
      <form style={{ display: user.existingUser ? 'block' : 'none' }} onSubmit={signInUser}>
        <input type="text" name="email" placeholder="Your Email" onBlur={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="your Password" onBlur={handleChange} required />
        <br />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
}

export default App;
