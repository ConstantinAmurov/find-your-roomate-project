import React from "react";

function FormContainer({ children }) {
  return (
    <div className="col-md-6 mx-auto bg-blue-400 rounded-md p-5">
      {children}
    </div>
  );
}

export default FormContainer;
