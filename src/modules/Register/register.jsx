import React from "react";

import "../Login/login.css";

//Components
import RegisterForm from "./RegisterForm";
import FormContainer from "../../components/Layouts/Public/FormContainer";
import HeaderContainer from "../../components/Layouts/Public/HeaderContainer";

const RegisterComponent = (props) => {
  const { onSubmit } = props;
  return (
    <div className="container m-auto">
      <div className="row">
        <FormContainer>
          <HeaderContainer />
          <RegisterForm onSubmit={onSubmit} />
        </FormContainer>
      </div>
    </div>
  );
};

export default RegisterComponent;
