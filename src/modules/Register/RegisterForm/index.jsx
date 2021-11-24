import React from "react";

import Input from "../../../components/Layouts/Public/Input";

import { Formik, Field } from "formik";
import * as Yup from "yup";

import SubmitButton from "../../../components/Layouts/Public/SubmitButton";

const RegisterForm = (props) => {
  const { onSubmit } = props;
  return (
    <Formik
      ref={(ref) => (this.formik = ref)}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        type: "",
        termsAgree: false,
        password: "",
      }}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={true}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .matches(/^[a-zA-Z]+$/, "First name only allows alphabets.")
          .required("First Name Required"),
        lastName: Yup.string().required("Last Name Required"),
        email: Yup.string()
          .email("Must be a valid email")
          .required("Email Required"),
        type: Yup.string().required("Option should be selected"),
        password: Yup.string().required("Password Required").min(6),
        termsAgree: Yup.bool()
          .required("You should accept the terms and conditions")
          .oneOf([true], "You should accept the terms and conditions"),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          setFieldValue,
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
                  label="First Name"
                  type="text"
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.firstName}
                  touched={touched.firstName}
                ></Input>
              </div>
              <div className="col">
                {" "}
                <Input
                  label="Last Name"
                  type="text"
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.lastName}
                  touched={touched.lastName}
                />
              </div>
            </div>

            <Input
              label="Email"
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />
            <Input
              label="Password"
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />
            <div className="row mt-4 mb-4 ">
              <div
                onClick={() => setFieldValue("type", "owner")}
                className="cursor-pointer select-none  col flex  align-items-center justify-center"
              >
                <Field
                  type="checkbox"
                  name="owner"
                  id=""
                  checked={values.type === "owner" ? true : false}
                  className="form-checkbox rounded"
                  onChange={handleChange}
                />
                <span className="text-white ml-2 text-lg">I Have a room</span>
              </div>
              <div
                onClick={() => setFieldValue("type", "user")}
                className="cursor-pointer select-none col flex  align-items-center justify-center"
              >
                <Field
                  type="checkbox"
                  name="user"
                  id=""
                  checked={values.type === "user" ? true : false}
                  className="form-checkbox rounded"
                  onChange={handleChange}
                />
                <span className="text-white ml-2 text-lg">I Need a room</span>
              </div>
              {errors.type && touched.type && (
                <div className="text-red-500 text-sm mt-2 col-12 flex justify-center">
                  {errors.type}
                </div>
              )}
            </div>

            <div className="row mt-3 mb-3">
              <div className="col">
                <Field
                  type="checkbox"
                  name="termsAgree"
                  className="form-checkbox rounded"
                  checked={values.termsAgree}
                  onChange={handleChange}
                />
                <span className="text-white ml-2 text-lg ">
                  By using the website, you accept the terms and conditions
                </span>
              </div>
            </div>
            <SubmitButton text="Register" onClick={() => handleSubmit} />
            {errors.termsAgree && touched.termsAgree && (
              <div className="text-red-500 text-sm flex justify-center mt-2">
                <span>{errors.termsAgree}</span>
              </div>
            )}
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
