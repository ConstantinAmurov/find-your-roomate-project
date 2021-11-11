import React from "react";
import LoginRedirectButton from "./LoginRedirectButton";
import RegisterRedirectButton from "./RegisterRedirectButton";
import logo from "../../../assets/Logo.png";
const HeaderContainer = () => {
  return (
    <div className="row">
      <div className="col">
        <img alt="" src={logo}></img>
      </div>
      <div className="col flex justify-between  align-items-center text-lg">
        <LoginRedirectButton></LoginRedirectButton>
        <RegisterRedirectButton></RegisterRedirectButton>
      </div>
    </div>
  );
};

export default HeaderContainer;
