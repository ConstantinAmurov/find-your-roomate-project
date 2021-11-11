import React from "react";

import Input from "../../../components/Layouts/Public/Input";

const SecondStepForm = ({ props }) => {
  const { values, handleBlur, handleChange } = props;

  return (
    <div className="mt-2 mb-2">
      <h1 className="text-5xl text-white text-center">Where</h1>
      <div className="row mt-3">
        <div className="col">
          <Input
            value={values["country"]}
            id="country"
            label="Country"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          ></Input>
        </div>
        <div className="col">
          <Input
            value={values["city"]}
            id="city"
            label="City"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          ></Input>
        </div>
      </div>
    </div>
  );
};

export default SecondStepForm;
