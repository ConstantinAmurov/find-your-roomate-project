//React
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
//Formik
import { Formik } from "formik";
import * as Yup from "yup";
//Components
import FormContainer from "../../components/Layouts/Public/FormContainer";
import PropTypes from "prop-types";
import LoginButton from "../../components/Layouts/Public/LoginButton";
import LoginRedirectButton from "../../components/Layouts/Public/LoginRedirectButton";
import RegisterRedirectButton from "../../components/Layouts/Public/RegisterRedirectButton";
import Input from "../../components/Layouts/Public/Input";
//Functions
import { loginRequest, loginPageInit } from "./actions";
import { redirectForConfirm } from "../Register/ConfirmAccount/actions";
import { browserRedirect } from "../../helpers/helpers";
//Assets
import logo from "../../assets/logo.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      remember: false,
    };
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  messageForConfirm() {
    return (
      <span>
        You can confirm your account from{" "}
        <button
          type="button"
          className="confirm-button-link"
          onClick={this.handleConfirmClick}
        >
          here
        </button>
        .
      </span>
    );
  }

  handleConfirmClick() {
    this.props.redirectForConfirm(this.state.email);
    browserRedirect("/confirm-account");
  }

  handleLoginSubmit(email) {
    this.setState({ email });
  }
  handleToggleChange = () => this.setState({ remember: !this.state.remember });

  render() {
    let { errors } = this.props;
    let err_message = errors.data ? errors.data : errors.message;
    let confirm_message =
      err_message === "Account is not confirmed. Please confirm your account."
        ? true
        : false;
    return (
      <div className="container m-auto ">
        <div className="row">
          <div className="col-md-6 mx-auto">
            {Object.keys(errors).length > 0 && (
              <div>
                {confirm_message && <div>{this.messageForConfirm()}</div>}
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <FormContainer>
            <div className="row">
              <div className="col">
                <img src={logo}></img>
              </div>
              <div className="col flex justify-between  align-items-center text-lg">
                <LoginRedirectButton></LoginRedirectButton>
                <RegisterRedirectButton></RegisterRedirectButton>
              </div>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={this.props.onSubmitForm}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required("Required"),
                password: Yup.string().required("Required").min(6),
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  isValid,
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
                          className=" mr-2"
                          checked={this.state.remember}
                          onChange={this.handleToggleChange}
                        ></input>
                        <span>Remember me</span>
                      </div>
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <div className="m-auto w-100">
                      <LoginButton
                        onClick={() => {
                          this.handleLoginSubmit(values.email);
                        }}
                        disabled={!isValid}
                      ></LoginButton>
                    </div>
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

Login.propTypes = {
  onSubmitForm: PropTypes.func,
  errors: PropTypes.object,
};

function mapStateToProps(state) {
  return { errors: state.login.errors };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loginRequest(evt));
    },
    onPageInit: dispatch(loginPageInit()),
    redirectForConfirm: (email) => dispatch(redirectForConfirm(email)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
