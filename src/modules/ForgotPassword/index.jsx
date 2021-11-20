//React
import React from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";

//Formik
import { forgotPassword } from "../../api/Forgot Password API";
import ForgotPasswordComponent from "./forgotPassword";

import {
  successNotification,
  errorNotification,
} from "../../components/Layouts/Public/NotificationsComponent/actions";

//Components
import CheckYourEmail from "../CheckYourEmail";

const Index = () => {
  const dispatch = useDispatch();
  const { mutate, isSuccess } = useMutation(forgotPassword);
  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: () => {
        dispatch(successNotification("Successfully sent email"));
      },
      onError: () => dispatch(errorNotification("Error on sending email")),
    });
  };

  if (isSuccess) return <CheckYourEmail />;
  return <ForgotPasswordComponent onSubmit={onSubmit} />;
};

export default Index;
