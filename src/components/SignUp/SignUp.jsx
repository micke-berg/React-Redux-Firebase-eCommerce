import React, { useState } from 'react';
import './SignUp.scss';

import { auth, handleUserProfile } from '../../firebase/utils';

import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';

function SignUp() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleNameChange = (e) => {
    setDisplayName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      const err = ['Passwords don´t match'];
      setErrors(err);
      console.log(err);
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await handleUserProfile(user, { displayName });

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setErrors(err);
    }
  };

  return (
    <div className="signUp">
      <div className="wrapper">
        <h2>SignUp</h2>
        {errors.length > 0 && (
          <ul>
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <div className="formWrapper">
          <form onSubmit={handleFormSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full Name..."
              onChange={handleNameChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email..."
              onChange={handleEmailChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="password..."
              onChange={handlePasswordChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password..."
              onChange={handleConfirmPasswordChange}
            />
            <Button type="submit">Register</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
