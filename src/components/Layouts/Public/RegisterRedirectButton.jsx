import React from "react";
import { FiUser } from "react-icons/fi";
import { browserRedirect } from "../../../helpers/helpers";
const RegisterButton = () => {
  return (
    <button
      onClick={() => browserRedirect("/register")}
      className="w-36 h-50 flex flex-row bg-white border-2 border-blue-600 text-blue-600 p-3 rounded-xl  justify-center align-items-center"
    >
      <FiUser className=" text-blue-700"></FiUser>
      <span className="ml-3 text-blue-700">Register</span>
    </button>
  );
};

export default RegisterButton;
