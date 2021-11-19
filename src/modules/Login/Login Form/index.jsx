import React, { useState } from "react";

import Input from "../../../components/Layouts/Public/Input";
import SubmitButton from "../../../components/Layouts/Public/SubmitButton";
import { Link } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";

const LoginForm = (props) => {
  const { onSubmit } = props;

  const [remember, setRemember] = useState(false);
  const toggleRemember = () => setRemember(!remember);
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string().email("Must be a valid email").required("Required"),
        password: Yup.string().required("Required").min(6),
      })}
      validateOnChange={false}
      validateOnBlur={true}
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
          <form onSubmit={handleSubmit} className="row flex-col">
            <Input
              label="Email Address"
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
            ></Input>
            <div className="w-100 flex justify-between mb-3 text-white text-lg">
              <div>
                <input
                  type="checkbox"
                  className="form-checkbox rounded mr-2"
                  checked={remember}
                  onChange={toggleRemember}
                ></input>
                <span>Remember me</span>
              </div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="m-auto w-100">
              <SubmitButton text="Login"></SubmitButton>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
