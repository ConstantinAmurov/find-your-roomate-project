import React from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { getAcceptedMatches } from "../../api/Matches API";
import UserBox from "../UserBox";
import Spinner from "../../components/Spinner/Spinner";
import DeclineButton from "../../components/Layouts/Private/RejectButton";

import { errorNotification } from "../../components/Layouts/Public/NotificationsComponent/actions";
import { getLocalUser } from "helpers/helpers";
import { getUser } from "api/Users API";

const Matches = () => {
  const user = getLocalUser();
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery("acceptedMatches", () =>
    getAcceptedMatches(user.id)
  );
  if (isLoading) return <Spinner />;

  if (error) {
    dispatch(errorNotification("Error on retreiving your matched users"));
    return (
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">My matches</h1>
      </div>
    );
  }
  return (
    <div className="m-16 container">
      <h1 className="text-blue-500 text-3xl font-bold row">My Matches</h1>
      <div className="row">
        {data.length > 0 ? (
          data.map((data, index) => {
      
            return (
              <UserBox index={index} data={data}>
                <div className="row mt-1 text-lg">
                  <div className="col text-center">
                    <DeclineButton />
                  </div>
                </div>
              </UserBox>
            );
          })
        ) : (
          <h1 className="text-blue-500 text-xl  mt-5">
            You did not match yet, why not try and send a request
          </h1>
        )}
      </div>
    </div>
  );
};

export default Matches;
