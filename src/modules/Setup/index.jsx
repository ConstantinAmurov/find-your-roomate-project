import React, { useState } from "react";
import FormContainer from "../../components/Layouts/Public/FormContainer";

import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";

import logo from "../../assets/Logo.png";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

import { Formik } from "formik";

const SetupAccount = () => {
  const [step, setStep] = useState(1);

  const prevStep = () =>
    setStep((prevState) => (prevState !== 1 ? prevState - 1 : 1));
  const nextStep = () =>
    setStep((prevState) => (prevState !== 3 ? prevState + 1 : 3));

  const renderStepSwitch = (step, props) => {
    switch (step) {
      case 1:
        return <FirstStepForm props={props}></FirstStepForm>;

      case 2:
        return <SecondStepForm props={props}></SecondStepForm>;

      case 3:
        return <ThirdStepForm props={props}></ThirdStepForm>;

      default:
        return <FirstStepForm props={props}></FirstStepForm>;
    }
  };
  return (
    <div className="container m-auto">
      <div className="row ">
        <FormContainer>
          <img alt="logo" src={logo} className="w-50 m-auto "></img>
          <Formik
            initialValues={{
              gender: null,
              dateOfBirth: null,
              passions: [],
              country: "",
              city: "",
              roommatePreferences: {
                gender: null,
                ageRange: [null, null],
              },
            }}
          >
            {(props) => {
              const { values, errors, setFieldValue, handleBlur } = props;
              return renderStepSwitch(step, {
                setFieldValue,
                errors,
                values,
                handleBlur,
              });
            }}
          </Formik>
          <div className="flex justify-between">
            <button
              className="pt-2 pb-2 pl-4 pr-4 rounded-full text-white bg-blue-700 flex align-items-center justify-between"
              onClick={() => prevStep()}
            >
              <FiArrowLeftCircle className="mr-3" /> Back
            </button>
            <button
              className="pt-2 pb-2 pl-4 pr-4 rounded-full text-white bg-blue-700 flex align-items-center justify-between"
              onClick={() => nextStep()}
            >
              <FiArrowRightCircle className="mr-3" /> Next
            </button>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default SetupAccount;
