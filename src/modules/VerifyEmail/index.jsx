import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { useLocation } from "react-router";

import {
  successNotification,
  errorNotification,
} from "components/Layouts/Public/NotificationsComponent/actions";
import { verifyAccount } from "api/Verify Account API";
import FormContainer from "components/Layouts/Public/FormContainer";
import HeaderContainer from "components/Layouts/Public/HeaderContainer";
import SubmitButton from "components/Layouts/Public/SubmitButton";
import {
  browserRedirect,
  checkAuthorization,
  deleteUser,
} from "helpers/helpers";
import Spinner from "components/Spinner/Spinner";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState({ title: "", subtitle: "" });
  const { pathname } = useLocation();

  const { isLoading, mutate } = useMutation(verifyAccount);
  useEffect(() => {
    if (checkAuthorization())
      mutate(pathname, {
        onSuccess: () => {
          setText({
            title: "Success",
            subtitle: "Your email has been succesfully verified",
          });
          dispatch(successNotification("Successfully verified email"));
          deleteUser();
        },
        onError: () => {
          setText({
            title: "Error",
            subtitle: "Your email has not been successfully verified",
          });

          dispatch(errorNotification("Error on verifying the email"));
        },
      });
    else {
      setText({
        title: "Error",
        subtitle: "You should be logged in to verify your email",
      });

      dispatch(errorNotification("Error on verifying the email"));
    }
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="authLayout bg-blue-600 flex h-screen">
      <div className="container m-auto">
        <div className="row text-center">
          <FormContainer>
            <HeaderContainer />
            <div className="mt-2 mb-9">
              <h1 className="text-5xl text-white"> {text.title}</h1>
              <p className="mt-3 text-xl text-white">{text.subtitle}</p>
            </div>
            <SubmitButton
              text="Go back to login"
              onClick={() => browserRedirect("/login")}
            />
          </FormContainer>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
