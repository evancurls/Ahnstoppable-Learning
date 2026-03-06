import React from 'react';

function Input({
  id="default",
  label="default",
  type="text",
  value,
  onChange,
}){
  return (
    <div className="input-box">
      <label
        className="ml-2 mb-10 text-md normal-case font-medium bg-slate-50 text-slate-800 shadow-zinc-500/50 bg-transparent border-current w-80"
        htmlFor={id}
      >
        {label}
      </label><br />
      <input className="border rounded-md px-3.5 py-2 opacity-100 text-md normal-case font-medium bg-slate-50 text-slate-600 shadow-zinc-500/50 bg-transparent border-slate-300 hover:border-slate-600 w-80 focus:border-slate-800"
        type={type}
        id={id}
        name={id}
        required
        minLength="4"
        size="10"
        value={value} 
        onChange={onChange}
      /> <br />
    </div>
  );
};

export default Input;