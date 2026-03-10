import React from 'react';

function Input({
  id="default",
  label,
  type="text",
  value,
  onChange,
  autoComplete="off"
}){
  return (
    <div className="input-box">
      <label
        className="ml-2 mb-10 text-md normal-case font-medium text-olive-300 shadow-zinc-500/50 bg-transparent border-current w-80"
        htmlFor={id}
      >
        {label}
      </label><br />
      <input className="base-text base-border"
        type={type}
        id={id}
        name={id}
        required
        minLength="4"
        size="10"
        value={value} 
        onChange={onChange}
        autoComplete={autoComplete}
      /> <br />
    </div>
  );
};

export default Input;