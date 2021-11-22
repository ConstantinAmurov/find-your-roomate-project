import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const DeclineButton = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={() => onClick()}
      className="  flex-row justify-between p-2 rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors transform"
    >
      <AiFillCloseCircle className="text-5xl m-auto" />
      <p>Decline match</p>
    </button>
  );
};

export default DeclineButton;
