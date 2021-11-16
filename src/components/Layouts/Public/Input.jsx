import React from "react";

const Input = ({
  label,
  type,
  id,
  min = 10,
  max = 100,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="mb-3">
      <label className="text-white text-lg">{label}</label>
      <input
        type={type}
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={
          error && touched
            ? "form-input border-2 w-full block rounded-md border-red-500"
            : "form-input border-2  w-full block rounded-md border-blue-600"
        }
      ></input>
      {error && touched && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
};

export default Input;
