import React from "react";

import FormContainer from "../../components/Layouts/Public/FormContainer";
import HeaderContainer from "../../components/Layouts/Public/HeaderContainer";
import ForgotPasswordForm from "./ ForgotPasswordForm";

const ForgotPasswordComponent = (props) => {
  const { onSubmit } = props;
  return (
    <div className="container m-auto">
      <div className="row text-center ">
        <FormContainer>
          <HeaderContainer />
          <div className="mt-2  mb-2 text-white">
            <h1 className="text-5xl ">Forgot your password?</h1>
            <h3 className="text-2xl mt-2">
              Enter your email to receive reset instructions
            </h3>
          </div>
          <ForgotPasswordForm onSubmit={onSubmit} />
        </FormContainer>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
