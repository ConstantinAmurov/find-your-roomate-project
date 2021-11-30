import React from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";

import { login } from "../../api/Login API";
import { loginSuccess } from "./actions";
import { errorNotification } from "../../components/Layouts/Public/NotificationsComponent/actions";
import {
  setAuthToken,
  setUser,
  browserRedirect,
} from "../../helpers/helpers";

import LoginComponent from "./login";

const Index = () => {
  //Hooks
  const { mutate } = useMutation(login);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (data) => {
        setAuthToken(data.token);
        setUser(data.user);
        dispatch(loginSuccess(data.user));
        browserRedirect("/");
      },
      onError: () => {
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
