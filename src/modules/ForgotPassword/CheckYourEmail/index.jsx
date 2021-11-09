import React from "react";
//Components
import SubmitButton from "../../../components/Layouts/Public/SubmitButton";
import { FiMail } from "react-icons/fi";
//Helpers
import { browserRedirect } from "../../../helpers/helpers";

const CheckYourEmail = () => {
  return (
    <>
      <FiMail className="text-8xl text-white m-auto"></FiMail>
      <div className="mt-2 mb-4">
        <h1 className="text-5xl text-white  ">Check your email</h1>
      </div>
      <SubmitButton text="Ok" onClick={() => browserRedirect("/login")} />
    </>
  );
};

export default CheckYourEmail;
