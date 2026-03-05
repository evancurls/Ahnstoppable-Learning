import React from 'react';
//import './Input.css';
function Input(){
  return (
    <div className="input-group">
      <label htmlFor={id} className="label-text">
        {label}
      </label>
      
      <input
        id={id}
        className={`base-input ${error ? 'input-error' : ''}`}
        aria-invalid={error ? "true" : "false"} // Accessibility for screen readers
        aria-describedby={error ? `${id}-error` : undefined}
        {...props} 
      />

      {error && (
        <span id={`${id}-error`} className="error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;