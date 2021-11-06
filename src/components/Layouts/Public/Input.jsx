import React from "react";

const Input = ({
  label,
  type,
  id,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor="email" className="text-white text-lg">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={
          error && touched
            ? "form-control  border-2 p-4 border-red-500"
            : "form-control  border-2 p-4 border-blue-600"
        }
      ></input>
      {error && touched && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
};

export default Input;
