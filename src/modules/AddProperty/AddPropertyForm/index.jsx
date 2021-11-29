import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Layouts/Public/Input";

const AddPropertyForm = (props) => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
          //TODO
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
              {/* //TODO */}
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <Input></Input>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddPropertyForm;
