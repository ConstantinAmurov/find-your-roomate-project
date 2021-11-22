import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import UserBox from "../../UserBox";
import Spinner from "../../../components/Spinner/Spinner";
import DeclineButton from "../../../components/Layouts/Private/RejectButton";

import { getIncomingMatches } from "../../../api/Matches API";

import { errorNotification } from "../../../components/Layouts/Public/NotificationsComponent/actions";

const IncomingMatches = () => {
  const id = 1;
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery(`incomingMatches[${id}]`, () =>
    getIncomingMatches(id)
  );

  if (isLoading) return <Spinner />;

  if (error) {
    dispatch(errorNotification("Error on retreiving Incoming matches"));
    return (
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">
          Incoming Matches
        </h1>
      </div>
    );
  }

  return (
    <div className="container m-16">
      <h1 className="text-blue-500 text-3xl font-bold -ml-3">
        Incoming Matches
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

export default IncomingMatches;
