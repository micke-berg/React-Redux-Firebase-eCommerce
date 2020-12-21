import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './SignUp.scss';

import { auth, handleUserProfile } from '../../firebase/utils';

import FormInput from '../forms/FormInput/FormInput';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import Button from '../forms/Button/Button';

function SignUp(props) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState('');

  const resetFormStates = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      const err = ['Passwords don´t match'];
      setErrors(err);
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await handleUserProfile(user, { displayName });
      resetFormStates();
      props.history.push('/');
    } catch (err) {
      setErrors(err);
    }
  };

  const configAuthWrapper = {
    headline: 'Sign Up',
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrapper">
        {errors.length > 0 && (
        <ul>
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
        )}
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={(e) => setDisplayName(e.target.value)}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default withRouter(SignUp);
