import React from "react";
import AddPropertyForm from "./AddPropertyForm";

const AddProperty = () => {
  const onSubmit = () => {};
  return (
    <div className="m-16 container">
      <h1 className="text-blue-500 text-3xl font-bold row">Add Property</h1>
      <div className="row">
        <AddPropertyForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddProperty;
