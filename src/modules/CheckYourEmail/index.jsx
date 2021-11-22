import React from "react";
//Components
import SubmitButton from "../../components/Layouts/Public/SubmitButton";
import { FiMail } from "react-icons/fi";
//Helpers
import { browserRedirect } from "../../helpers/helpers";

import FormContainer from "../../components/Layouts/Public/FormContainer";
import HeaderContainer from "../../components/Layouts/Public/HeaderContainer";

const CheckYourEmail = () => {
  return (
    <div className="container m-auto">
      <div className="row text-center text-white">
        <FormContainer>
          <HeaderContainer />
          <FiMail className="text-8xl mt-9 ml-auto mr-auto"></FiMail>
          <div className="mt-2 mb-9">
            <h1 className="text-5xl ">Please check your email</h1>
          </div>
          <SubmitButton text="Ok" onClick={() => browserRedirect("/login")} />
        </FormContainer>
      </div>
    </div>
  );
};

export default CheckYourEmail;
