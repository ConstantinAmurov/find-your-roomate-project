import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { deleteUser } from "../../helpers/helpers";

class Logout extends Component {
  render() {
    deleteUser();
    return <Redirect to="/login" />;
  }
}

export default Logout;
