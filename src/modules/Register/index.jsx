import React from "react";

import { useDispatch } from "react-redux";
import { useMutation } from "react-query";

import {
  successNotification,
  errorNotification,
} from "../../components/Layouts/Public/NotificationsComponent/actions";

import { register } from "../../api/Register API";

import RegisterComponent from "./register";

import CheckYourEmail from "../CheckYourEmail";

const Index = () => {
  const { mutate, isSuccess } = useMutation(register);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const data = {
      name: `${values["firstName"]} ${values["lastName"]}`,
      email: values.email,
      password: values.password,
    };

    mutate(data, {
      onSuccess: () => {
        dispatch(successNotification("Successfully Registered"));
      },
      onError: () => dispatch(errorNotification("Error on register user")),
    });
  };

  if (isSuccess) return <CheckYourEmail />;

  return <RegisterComponent onSubmit={onSubmit} />;
};

export default Index;
