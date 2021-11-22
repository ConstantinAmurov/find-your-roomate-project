import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import HeaderContainer from "../../components/Layouts/Public/HeaderContainer";
import FormContainer from "../../components/Layouts/Public/FormContainer";
import ResetPasswordForm from "./ResetPasswordForm";
import { createNewPasswordInit } from "./actions";

const ResetPasswordComponent = (props) => {
  const { onSubmit } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createNewPasswordInit());
  });

  return (
    <div className="container m-auto">
      <div className="row text-center">
        <FormContainer>
          <HeaderContainer />
          <h1 className="text-5xl text-white"> Create New Password</h1>
          <p className="mt-3 text-xl text-white">
            Your new password should contain at least 6 characters
          </p>
          <ResetPasswordForm onSubmit={onSubmit} />
        </FormContainer>
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
