import React from "react";

//Formik
import { BsSearch } from "react-icons/bs";
import Input from "../../../../components/Layouts/Public/Input";
import { Formik } from "formik";
import * as Yup from "yup";
const SearchForm = (props) => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={{ country: "", city: "", min_number_of_rooms: 1, max_rent: 0 }}
      onSubmit={onSubmit}
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
          <form onSubmit={handleSubmit} classname="container">
            <div className="row my-3">
              <div className="col-4">
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
              <div className="col-4">
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

              <div className="col-4">
                <Input
                  label="Minimum number of Bedrooms"
                  type="number"
                  id="min_number_of_rooms"
                  min={1}
                  value={values.min_number_of_rooms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.min_number_of_rooms}
                  touched={touched.min_number_of_rooms}
                ></Input>
              </div>
              <div className="col-4">
                <Input
                  label="Maximum Rent"
                  type="number"
                  id="max_rent"
                  min={0}
                  max={100000}
                  value={values.max_rent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.max_rent}
                  touched={touched.max_rent}
                ></Input>
              </div>
            </div>
            <div className="row ">
              <div className="col flex justify-content-end text-white">
                <button className=" text-2xl flex align-items-center  font-bold flex py-2 px-4 rounded-md hover:bg-gray-100  hover:text-blue-500 transition-colors transform">
                  <BsSearch className="mr-2" /> Search
                </button>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;
