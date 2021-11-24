import React from "react";

import Select from "../../../components/Layouts/Public/CustomSelectComponent";
import Input from "../../../components/Layouts/Public/Input";

import { genderOptions,passionsOptions } from "../constants";

const FirstStepForm = ({ props, type }) => {
  const {
    setFieldValue,
    setFieldTouched,
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
  } = props;

  const form = { setFieldValue, setFieldTouched };
  return (
    <div className="mt-2 mb-2">
      <h1 className="text-5xl text-white text-center">About you</h1>
      <div className="row mt-3">
        <div className="col">
          <Select
            label="Gender"
            options={genderOptions}
            field={{ name: "gender", handleBlur, value: values["gender"] }}
            form={form}
            error={errors.gender}
            touched={touched.gender}
          ></Select>
        </div>
        <div className="col">
          <Input
            id="birthday"
            value={values["birthday"]}
            label="Date of Birth"
            onChange={handleChange}
            onBlur={handleBlur}
            type="date"
            touched={touched.birthday}
            error={errors.birthday}
          ></Input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {type === "user" && (
            <Select
              label="Passions"
              options={passionsOptions}
              field={{
                name: "passions",
                handleBlur,
                value: values["passions"],
              }}
              form={form}
              isMulti={true}
              touched={touched.passions}
              error={errors.passions}
            ></Select>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstStepForm;
