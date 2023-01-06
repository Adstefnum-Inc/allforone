import React, { useState } from 'react';
import * as firebase from 'firebase/app';

function SignupModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        // The user is signed up.
      })
      .catch((error) => {
        // An error occurred.
      });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default SignupModal;