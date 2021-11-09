import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import "../Login/login.css";
import PropTypes from "prop-types";
import { registerRequest, registerPageInit } from "./actions";
//Components
import FormContainer from "../../components/Layouts/Public/FormContainer";
import HeaderContainer from "../../components/Layouts/Public/HeaderContainer";
import Input from "../../components/Layouts/Public/Input";
import Spinner from "../../components/Spinner/Spinner";
import SubmitButton from "../../components/Layouts/Public/SubmitButton";

class Register extends Component {
  componentDidUpdate(prevProps, prevState) {
    // reset form
    if (Object.keys(this.props.user).length > 0) {
      this.formik.resetForm();
    }
  }
  render() {
    return (
      <div className="container m-auto">
        {this.props.requesting && <Spinner />}
        <div className="row">
          <div className="col-md-6 mx-auto">
            {Object.keys(this.props.errors).length > 0 && <div></div>}
            {Object.keys(this.props.user).length > 0 && <div></div>}
          </div>
        </div>
        <div className="row">
          <FormContainer>
            <HeaderContainer />
            <Formik
              ref={(ref) => (this.formik = ref)}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                option: "",
                termsAgree: false,
                password: "",
              }}
              onSubmit={(values) => {}}
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
                option: Yup.string().required("Option should be selected"),
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

                  isSubmitting,
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
                        onClick={() => setFieldValue("option", "haveRoom")}
                        className="cursor-pointer select-none  col flex  align-items-center justify-center"
                      >
                        <Field
                          type="checkbox"
                          name="haveRoom"
                          id=""
                          checked={values.option === "haveRoom" ? true : false}
                          className="form-checkbox rounded"
                          onChange={handleChange}
                        />
                        <span className="text-white ml-2 text-lg">
                          I Have a room
                        </span>
                      </div>
                      <div
                        onClick={() => setFieldValue("option", "needRoom")}
                        className="cursor-pointer select-none col flex  align-items-center justify-center"
                      >
                        <Field
                          type="checkbox"
                          name="needRoom"
                          id=""
                          checked={values.option === "needRoom" ? true : false}
                          className="form-checkbox rounded"
                          onChange={handleChange}
                        />
                        <span className="text-white ml-2 text-lg">
                          I Need a room
                        </span>
                      </div>
                      {errors.option && touched.option && (
                        <div className="text-red-500 text-sm mt-2 col-12 flex justify-center">
                          {errors.option}
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
                          By using the website, you accept the terms and
                          conditions
                        </span>
                      </div>
                    </div>
                    <SubmitButton
                      text="Register"
                      onClick={() => handleSubmit}
                    />
                    {errors.termsAgree && touched.termsAgree && (
                      <div className="text-red-500 text-sm flex justify-center mt-2">
                        <span>{errors.termsAgree}</span>
                      </div>
                    )}
                  </form>
                );
              }}
            </Formik>
          </FormContainer>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  onSubmitForm: PropTypes.func,
  errors: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    errors: state.register.errors,
    user: state.register.user,
    requesting: state.register.requesting,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt, actions) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(registerRequest(evt));
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 500);
    },
    onPageInit: dispatch(registerPageInit()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
