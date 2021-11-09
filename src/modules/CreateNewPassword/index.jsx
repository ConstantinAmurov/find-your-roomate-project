import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import HeaderContainer from "../../components/Layouts/Public/HeaderContainer";
import FormContainer from "../../components/Layouts/Public/FormContainer";

import Input from "../../components/Layouts/Public/Input";
import SubmitButton from "../../components/Layouts/Public/SubmitButton";

import { Formik } from "formik";
import * as Yup from "yup";

import { createNewPasswordInit } from "./actions";

const CreateNewPassword = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createNewPasswordInit());
  }, []);

  return (
    <div className="container m-auto">
      <div className="row text-center">
        <FormContainer>
          <HeaderContainer />

          <h1 className="text-5xl text-white"> Create New Password</h1>
          <p className="mt-3 text-xl text-white">
            Your new password should contain at least 6 characters
          </p>

          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log("submit new password");
            }}
            validateOnChange={false}
            validateOnBlur={true}
            validationSchema={Yup.object().shape({
              password: Yup.string()
                .required("No password provided.")
                .min(6, "Password is too short - should be 6 chars minimum.")
                .matches(
                  /[a-zA-Z]/,
                  "Password can only contain Latin letters."
                ),
              repeatPassword: Yup.string()
                .required("No password provided.")
                .min(6, "Password is too short - should be 6 chars minimum.")
                .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
                .oneOf([Yup.ref("password"), null], "Passwords must match"),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                setFieldValue,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="mt-4 mb-2">
                    <Input
                      label="New Password"
                      type="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password}
                      touched={touched.password}
                    />
                  </div>
                  <div className="mt-2 mb-2">
                    <Input
                      label="Repeat Password"
                      type="password"
                      id="repeatPassword"
                      value={values.repeatPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.repeatPassword}
                      touched={touched.repeatPassword}
                    />
                  </div>
                  <SubmitButton text="Create" onClick={() => handleSubmit} />
                </form>
              );
            }}
          </Formik>
        </FormContainer>
      </div>
    </div>
  );
};

export default CreateNewPassword;
