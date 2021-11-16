import React, { useState } from "react";
import FormContainer from "../../components/Layouts/Public/FormContainer";

import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";

import logo from "../../assets/Logo.png";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

import { Formik } from "formik";
import * as Yup from "yup";

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
              gender: "",
              dateOfBirth: "",
              passions: [],
              country: "",
              city: "",
              roommatePreferences: {
                gender: "",
                minAgeRange: "",
                maxAgeRange: "",
              },
            }}
            validateOnChange={true}
            validateOnBlur={true}
            validationSchema={Yup.object().shape({
              gender: Yup.string().required("Required"),
              dateOfBirth: Yup.date().required("Required"),
              passions: Yup.array()
                .required("Required")
                .min(1, "At least 1 passion required"),
              country: Yup.string().required("Required"),
              city: Yup.string().required("Required"),
              roommatePreferences: Yup.object().shape({
                gender: Yup.string().required("Required"),
                minAgeRange: Yup.number()
                  .required("Required")
                  .positive("Should be a positive number")
                  .integer("Should be an integer number")
                  .max(100, "Too old"),

                maxAgeRange: Yup.number()
                  .required("Required")
                  .positive("Should be a positive number")
                  .integer("Should be an integer number")
                  .moreThan(
                    Yup.ref("minAgeRange"),
                    "Maximum age should be greated than minimum age"
                  )
                  .max(100, "Too old"),
              }),
            })}
            onSubmit={(values) => {
              console.log(values);
            }}
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
                      onClick={() => (step !== 3 ? nextStep() : handleSubmit())}
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
  );
};

export default SetupAccount;
