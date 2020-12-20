import React, { useState } from 'react';
import './SignIn.scss';

import Button from '../forms/Button/Button';
import FormInput from '../forms/FormInput/FormInput';

import { signInWithGoogle, auth } from '../../firebase/utils';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signIn">
      <div className="wrapper">
        <h2>Log in</h2>
        <div className="form-wrap">
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email address..."
              onChange={handleEmailChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="password..."
              onChange={handlePasswordChange}
            />
            <Button type="submit">Login</Button>
            <div className="social-signIn">
              <div className="row">
                <Button onClick={signInWithGoogle}>Sign In With Google</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
