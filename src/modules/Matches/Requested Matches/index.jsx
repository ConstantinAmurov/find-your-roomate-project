import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import UserBox from "../../UserBox";
import Spinner from "../../../components/Spinner/Spinner";
import DeclineButton from "../../../components/Layouts/Private/RejectButton";

import { getRequestedMatches } from "../../../api/Matches API";

import { errorNotification } from "../../../components/Layouts/Public/NotificationsComponent/actions";

const RequestedMatches = () => {
  const id = 1;
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery(`requestedMatches[${id}]`, () =>
    getRequestedMatches(id)
  );

  if (isLoading) return <Spinner />;

  if (error) {
    dispatch(errorNotification("Error on retreiving requested matches"));
    return (
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">
          Incoming Matches
        </h1>
      </div>
    );
  }

  return (
    <div className="m-16 container">
      <h1 className="text-blue-500 text-3xl font-bold row">
        Requested Matches
      </h1>
      <div className="row">
        {data.map((data, index) => {
          return (
            <UserBox index={index} data={data}>
              <div className="row mt-1 text-lg">
                <div className="col text-center">
                  <DeclineButton />
                </div>
              </div>
            </UserBox>
          );
        })}
      </div>
    </div>
  );
};

export default RequestedMatches;
