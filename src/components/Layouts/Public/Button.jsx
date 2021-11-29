import React from "react";

const Button = (props) => {
  const { type, text, onClick } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className=" text-2xl text-blue-500 border-2 border-blue-500 flex align-items-center  font-bold py-2 px-4 rounded-md hover:bg-blue-400 hover:border-blue-400 hover:text-white transition-colors transform"
    >
      {text}
    </button>
  );
};

export default Button;
