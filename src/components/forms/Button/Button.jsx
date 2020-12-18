import React from 'react';
import './Button.scss';

function Button({ children, ...props }) {
  return (
    <button type="button" className="btn" {...props}>
      {children}
    </button>
  );
}

export default Button;
