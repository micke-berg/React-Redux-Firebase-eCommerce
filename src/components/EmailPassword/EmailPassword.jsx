import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './EmailPassword.scss';

import { auth } from '../../firebase/utils';

import AuthWrapper from '../AuthWrapper/AuthWrapper';
import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';

const EmailPassword = (props) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: 'http://localhost:3000/login',
    };
    try {
      await auth.sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push('/login');
        });
      // setEmail('');
    } catch (err) {
      const error = ['Email not found. Please try again.'];
      setErrors(error);
    }
  };

  const configAuthWrapper = {
    headline: 'Email Password',
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li key={error}>
              {error}
            </li>
          ))}
        </ul>
      )}
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email..."
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">
            Email Password
          </Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(EmailPassword);
