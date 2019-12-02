import React from 'react';

const InputField = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="list__input"
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputField;
