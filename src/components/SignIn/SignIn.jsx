import React from 'react';
import './SignIn.scss';

import Button from '../forms/Button/Button';
import { signInWithGoogle } from '../../firebase/utils';

function SignIn() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="signIn">
      <div className="wrapper">
        <h2>Log in</h2>
        <div className="form-wrap">
          <form onSubmit={handleSubmit}>
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
