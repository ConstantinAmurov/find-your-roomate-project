import React from "react";

import Select from "../../../components/Layouts/Public/CustomSelectComponent";
import Input from "../../../components/Layouts/Public/Input";
const ThirdStepForm = ({ props }) => {
  const { setFieldValue, handleChange, values, handleBlur } = props;
  const form = { setFieldValue };
  const options = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
  ];
  return (
    <div className="mt-2 mb-2">
      <h1 className="text-5xl text-white text-center">Roommate prefences</h1>
      <div className="row mt-3">
        <div className="col-lg-6 col-md-12">
          <Select
            label="Gender"
            options={options}
            field={{
              name: "roommatePreferences.gender",
              handleBlur,
              value: values["roommatePreferences"]["gender"],
            }}
            form={form}
          ></Select>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="row">
            <div className="col-lg-6">
              <Input
                id="roommatePreferences.minAgeRange"
                label="Minumum age"
                type="number"
                onChange={handleChange}
                value={values["roommatePreferences"]["minAgeRange"]}
              ></Input>
            </div>
            <div className="col-lg-6">
              <Input
                id="roommatePreferences.maxAgeRange"
                label="Maximum age"
                type="number"
                onChange={handleChange}
                value={values["roommatePreferences"]["maxAgeRange"]}
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStepForm;
