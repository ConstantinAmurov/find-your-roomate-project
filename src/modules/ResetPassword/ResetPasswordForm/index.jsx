import React from "react";

import Input from "../../../components/Layouts/Public/Input";
import SubmitButton from "../../../components/Layouts/Public/SubmitButton";

import { Formik } from "formik";
import * as Yup from "yup";

const ResetPasswordForm = (props) => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={{
        password: "",
        password_confirmation: "",
      }}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={true}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum."),
        password_confirmation: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .oneOf([Yup.ref("password"), null], "Passwords must match"),
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
                id="password_confirmation"
                password_confirmation
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password_confirmation}
                touched={touched.password_confirmation}
              />
            </div>
            <SubmitButton text="Create" onClick={() => handleSubmit} />
          </form>
        );
      }}
    </Formik>
  );
};

export default ResetPasswordForm;
