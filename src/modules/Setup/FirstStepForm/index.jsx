import React from "react";

import Select from "../../../components/Layouts/Public/CustomSelectComponent";
import Input from "../../../components/Layouts/Public/Input";
const options = [
  { value: "M", label: "Male" },
  { value: "F", label: "Female" },
];

const FirstStepForm = ({ props }) => {
  const { setFieldValue, values, handleBlur } = props;

  const form = { setFieldValue };

  return (
    <div className="mt-2 mb-2">
      <h1 className="text-5xl text-white text-center">About you</h1>
      <div className="row mt-3">
        <div className="col">
          <Select
            label="Gender"
            options={options}
            field={{ name: "gender", handleBlur, value: values["gender"] }}
            form={form}
          ></Select>
        </div>
        <div className="col">
          <Input label="Date of Birth" type="date"></Input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Select
            label="Passions"
            options={options}
            field={{ name: "passions", handleBlur, value: values["passions"] }}
            form={form}
            isMulti={true}
          ></Select>
        </div>
      </div>
    </div>
  );
};

export default FirstStepForm;
