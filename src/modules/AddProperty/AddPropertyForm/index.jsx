import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Layouts/Public/Input";
import Button from "components/Layouts/Public/Button";
const AddPropertyForm = (props) => {
  const { onSubmit } = props;
  debugger;
  return (
    <div>
      <Formik
        initialValues={{ country: "", city: "", number_of_rooms: 1, rent: 100 }}
        onSubmit={onSubmit}
        validationSchema={Yup.object().shape({
          country: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          number_of_rooms: Yup.number().required("Required"),
          rent: Yup.number()
            .required("Required")
            .min(1, "Minimum price required"),
        })}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <>
              <form
                onSubmit={handleSubmit}
                className=" border-2 bg-blue-400 rounded-xl p-4"
              >
                {/* //TODO */}
                <div className="my-4">
                  <Input
                    label="Country"
                    type="text"
                    id="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.country}
                    touched={touched.country}
                  ></Input>
                </div>
                <div className="my-4">
                  <Input
                    label="City"
                    type="text"
                    id="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.city}
                    touched={touched.city}
                  ></Input>
                </div>
                <div className="row my-4">
                  <div className="col-6">
                    <Input
                      label="Number of rooms"
                      type="number"
                      min={1}
                      max={10}
                      id="number_of_rooms"
                      value={values.number_of_rooms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.number_of_rooms}
                      touched={touched.number_of_rooms}
                    ></Input>
                  </div>
                  <div className="col-6">
                    <Input
                      label="Rent price"
                      type="number"
                      id="rent"
                      min={1}
                      max={100000}
                      value={values.rent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.rent}
                      touched={touched.rent}
                    ></Input>
                  </div>
                </div>
              </form>
              <div className="mt-4 flex justify-content-end">
                <Button text="Add Property" onClick={handleSubmit}/>
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddPropertyForm;
