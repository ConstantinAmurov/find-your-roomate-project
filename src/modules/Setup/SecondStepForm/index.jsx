import React from "react";

import Input from "../../../components/Layouts/Public/Input";

const SecondStepForm = ({ props }) => {
  const { handleChange, values, handleBlur, errors, touched } = props;
  console.log(errors);
  return (
    <div className="mt-2 mb-2">
      <h1 className="text-5xl text-white text-center">Where are you from?</h1>
      <div className="row mt-3">
        <div className="col">
          <Input
            value={values["country"]}
            id="country"
            label="Country"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.country}
            touched={touched.country}
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
            error={errors.city}
            touched={touched.city}
          ></Input>
        </div>
      </div>
    </div>
  );
};

export default SecondStepForm;
