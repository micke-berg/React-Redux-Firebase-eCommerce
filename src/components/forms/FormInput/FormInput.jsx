import React from 'react';
import './formInput.scss';

function FormInput({ handleChange, label, ...props }) {
  return (
    <div className="formRow">
      {label && (
        <label htmlFor="label">{label}</label>
      )}
      <input type="text" className="formInput" onChange={handleChange} {...props} />
    </div>
  );
}

export default FormInput;
