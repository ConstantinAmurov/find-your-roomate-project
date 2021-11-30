import React from "react";

import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { useQuery } from "helpers/helpers";

import ResetPasswordComponent from "./resetPassword";

import {
  successNotification,
  errorNotification,
} from "../../components/Layouts/Public/NotificationsComponent/actions";

import { resetPassword } from "../../api/Reset Password API";

import { browserRedirect } from "../../helpers/helpers";

const Index = () => {
  const query = useQuery();
  const { mutate } = useMutation(resetPassword);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    mutate(
      {
        token: query.get("token"),
        email: query.get("email"),
        ...values,
      },
      {
        onSuccess: () => {
          dispatch(successNotification("Reset password successfuly"));
          browserRedirect("/login");
        },
        onError: () => dispatch(errorNotification("Error on reset password")),
      }
    );
  };

  return <ResetPasswordComponent onSubmit={onSubmit} />;
};

export default Index;
