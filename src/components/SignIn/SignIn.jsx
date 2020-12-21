import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SignIn.scss';

import Button from '../forms/Button/Button';
import FormInput from '../forms/FormInput/FormInput';
import AuthWrapper from '../AuthWrapper/AuthWrapper';

import { signInWithGoogle, auth } from '../../firebase/utils';

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push('/');
    } catch (err) {
      // console.log(err);
    }
  };

  const configAuthWrapper = {
    headline: 'Sign In',
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email address..."
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="password..."
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          <div className="social-signIn">
            <div className="row">
              <Button onClick={signInWithGoogle}>
                Sign in with Google
              </Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default withRouter(SignIn);
