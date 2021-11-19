import React from "react";

//Components
import FormContainer from "../../components/Layouts/Public/FormContainer";

import HeaderContainer from "../../components/Layouts/Public/HeaderContainer";
//Functions
import Form from "./Login Form";

const Login = (props) => {
  const { onSubmit } = props;
  return (
    <div className="container m-auto ">
      <div className="row">
        <div className="col-md-6 mx-auto"></div>
      </div>
      <div className="row">
        <FormContainer>
          <HeaderContainer />
          <Form onSubmit={onSubmit} />
        </FormContainer>
      </div>
    </div>
  );
};

export default Login;
