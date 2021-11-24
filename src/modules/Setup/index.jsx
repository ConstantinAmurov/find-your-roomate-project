import React, { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import FormContainer from "../../components/Layouts/Public/FormContainer";

import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";

import logo from "../../assets/Logo.png";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

import { Formik } from "formik";

import { userValidation, ownerValidation } from "./constants";
import {
  successNotification,
  errorNotification,
} from "../../components/Layouts/Public/NotificationsComponent/actions";
import { setupAccount } from "../../api/Setup API";
import {
  getUser,
  browserRedirect,
  deleteUser,
} from "../../helpers/helpers";
const SetupAccount = (props) => {
  const user = getUser();
  const { type } = props;
  const { mutate } = useMutation(setupAccount);
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);

  const prevStep = () =>
    setStep((prevState) => (prevState !== 1 ? prevState - 1 : 1));
  const nextStep = () =>
    setStep((prevState) => (prevState !== 3 ? prevState + 1 : 3));

  const renderStepSwitch = (step, props) => {
    switch (step) {
      case 1:
        return <FirstStepForm props={props} type={type}></FirstStepForm>;

      case 2:
        return <SecondStepForm props={props}></SecondStepForm>;

      case 3:
        return <ThirdStepForm props={props} type={type}></ThirdStepForm>;

      default:
        return <FirstStepForm props={props}></FirstStepForm>;
    }
  };

  const onSubmit = (formValues) => {
    const values = {
      ...formValues,
      preferenced_agerange: [formValues.minAgeRange, formValues.maxAgeRange],
    };
    delete values.maxAgeRange;
    delete values.minAgeRange;

    mutate(
      {
        id: user.id,
        values,
      },
      {
        onSuccess: (data) => {
          dispatch(successNotification("Account Setup Successfuly"));
          deleteUser();
          browserRedirect("/");
        },
        onError: () => {
          dispatch(errorNotification("Error occured at setup account"));
        },
      }
    );
  };
  return (
    <div className="authLayout bg-blue-700 flex h-screen">
      <div className="container m-auto">
        <div className="row ">
          <FormContainer>
            <img alt="logo" src={logo} className="w-50 m-auto "></img>
            <Formik
              initialValues={{
                gender: "",
                birthday: "",
                passions: [],
                country: "",
                city: "",
                preferenced_gender: "",
                minAgeRange: "",
                maxAgeRange: "",
              }}
              validateOnChange={true}
              validateOnBlur={true}
              validationSchema={
                type === "user" ? userValidation : ownerValidation
              }
              onSubmit={onSubmit}
            >
              {(props) => {
                const {
                  values,
                  errors,
                  handleChange,
                  setFieldValue,
                  setFieldTouched,
                  handleSubmit,
                  handleBlur,
                  touched,
                } = props;
                return (
                  <>
                    {renderStepSwitch(step, {
                      setFieldValue,
                      setFieldTouched,
                      errors,
                      values,
                      handleBlur,
                      handleChange,
                      touched,
                    })}
                    <div className="flex justify-between">
                      <button
                        className="pt-2 pb-2 pl-4 pr-4 rounded-full text-white bg-blue-700 flex align-items-center justify-between"
                        onClick={() => prevStep()}
                      >
                        <FiArrowLeftCircle className="mr-3" /> Back
                      </button>
                      <button
                        className="pt-2 pb-2 pl-4 pr-4 rounded-full text-white bg-blue-700 flex align-items-center justify-between"
                        onClick={() =>
                          step !== 3 ? nextStep() : handleSubmit()
                        }
                        type={step !== 3 ? "" : "submit"}
                      >
                        <FiArrowRightCircle className="mr-3" />{" "}
                        {step !== 3 ? "Next" : "Finish"}
                      </button>
                    </div>
                  </>
                );
              }}
            </Formik>
          </FormContainer>
        </div>
      </div>
    </div>
  );
};

export default SetupAccount;
