//React
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Components
import FormContainer from "../../components/Layouts/Public/FormContainer";
import HeaderContainer from "../../components/Layouts/Public/HeaderContainer";
import Input from "../../components/Layouts/Public/Input";
import SubmitButton from "../../components/Layouts/Public/SubmitButton";
import CheckYourEmail from "../CheckYourEmail";
//Formik
import { Formik } from "formik";
import * as Yup from "yup";

//Actions
import { forgotPasswordInit } from "./actions";

import { useMutation } from "react-query";
import { forgotPassword } from "../../api/Forgot Password API";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { mutate } = useMutation(forgotPassword);

  const showMessage = useSelector((state) => state.forgotPassword.successful);
  useEffect(() => {
    dispatch(forgotPasswordInit());
  });
  const onSubmit = (values) => {
    mutate(values);
  };
  return (
    <div className="container m-auto">
      <div className="row text-center ">
        <FormContainer>
          <HeaderContainer />

          {showMessage ? (
            <CheckYourEmail />
          ) : (
            <>
              <div className="mt-2 mb-2">
                <h1 className="text-5xl text-white  ">Forgot Your Password?</h1>
                <p className="mt-3 text-xl text-white ">
                  Enter your email below to receive reset instructions
                </p>
              </div>

              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={true}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("Must be a valid email")
                    .required("Email Required"),
                })}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col">
                          {" "}
                          <Input
                            label=""
                            type="text"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            touched={touched.email}
                          />
                        </div>
                      </div>
                      <SubmitButton text="Send" onClick={() => handleSubmit} />
                    </form>
                  );
                }}
              </Formik>
            </>
          )}
        </FormContainer>
      </div>
    </div>
  );
};

export default ForgotPassword;
