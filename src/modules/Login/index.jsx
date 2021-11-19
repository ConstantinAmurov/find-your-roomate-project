import React from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";

import "react-toastify/dist/ReactToastify.css";

import { login } from "../../api/Login API";
import { loginSuccess } from "./actions";
import {
  successNotification,
  errorNotification,
} from "../../components/Layouts/Public/NotificationsComponent/actions";
import { setAuthToken, browserRedirect } from "../../helpers/helpers";

import LoginComponent from "./login";

const Index = () => {
  //Hooks
  const { data, isLoading, mutate, error } = useMutation(login);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (data) => {
        setAuthToken(data.token);
        dispatch(loginSuccess(data.user));
        dispatch(successNotification("Successfuly Logged in"));
        browserRedirect("/");
      },
      onError: (error) => {
        dispatch(errorNotification("Error on logging in"));
      },
    });
  };

  return (
    <>
      <LoginComponent onSubmit={onSubmit} />
    </>
  );
};

export default Index;
