import React from "react";
const SubmitButton = ({ text, onClick, disabled }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className=" w-100 flex flex-row bg-blue-700 text-white p-3 rounded-xl justify-center align-items-center "
    >
      <span className="ml-3 text-white text-2xl">{text}</span>
    </button>
  );
};

export default SubmitButton;
