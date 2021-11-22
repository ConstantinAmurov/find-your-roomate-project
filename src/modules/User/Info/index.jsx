import React from "react";

const Info = (props) => {
  const { label, text } = props;
  return (
    <>
      <h1 className="font-bold text-4xl mt-4 mb-3">{label}</h1>{" "}
      <span className="text-2xl">{text}</span>
    </>
  );
};

export default Info;
