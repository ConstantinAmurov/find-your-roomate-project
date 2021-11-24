import React from "react";

import Select from "../../../components/Layouts/Public/CustomSelectComponent";
import Input from "../../../components/Layouts/Public/Input";

import { genderOptions } from "../constants";

const ThirdStepForm = ({ props, type }) => {
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
      <h1 className="text-5xl text-white text-center">
        {type === "user" ? "Roommate prefences" : "Tenant preferences"}
      </h1>
      <div className="row mt-3">
        <div className="col-lg-6 col-md-12">
          <Select
            label="Gender"
            options={genderOptions}
            field={{
              name: "preferenced_gender",
              handleBlur,
              value: values["preferenced_gender"],
            }}
            form={form}
            error={errors["preferenced_gender"]}
            touched={touched["preferenced_gender"]}
          ></Select>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="row">
            <div className="col-lg-6">
              <Input
                id="minAgeRange"
                label="Minumum age"
                type="number"
                min={0}
                max={100}
                onChange={handleChange}
                value={values["minAgeRange"]}
                error={errors["minAgeRange"]}
                touched={touched["minAgeRange"]}
              ></Input>
            </div>
            <div className="col-lg-6">
              <Input
                id="maxAgeRange"
                label="Maximum age"
                type="number"
                min={0}
                max={100}
                onChange={handleChange}
                value={values["maxAgeRange"]}
                error={errors["maxAgeRange"]}
                touched={touched["maxAgeRange"]}
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStepForm;
