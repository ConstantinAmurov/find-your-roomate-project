import React from "react";

import Input from "../../../components/Layouts/Public/Input";
import SubmitButton from "../../../components/Layouts/Public/SubmitButton";

import { Formik } from "formik";
import * as Yup from "yup";

const ForgotPasswordForm = (props) => {
  const { onSubmit } = props;

  return (
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
  );
};

export default ForgotPasswordForm;
