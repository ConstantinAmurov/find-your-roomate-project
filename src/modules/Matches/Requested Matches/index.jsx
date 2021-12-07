import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import MatchUserBox from "../../UserBox/MatchUserBox";
import Spinner from "../../../components/Spinner/Spinner";
import DeclineButton from "../../../components/Layouts/Private/RejectButton";

import { getRequestedMatches } from "../../../api/Matches API";

import { errorNotification } from "../../../components/Layouts/Public/NotificationsComponent/actions";
import { getLocalUser } from "helpers/helpers";

const RequestedMatches = () => {
  const user = getLocalUser();
  const dispatch = useDispatch();

  const { isLoading, error, data, isSuccess } = useQuery(
    "requestedMatches",
    () => getRequestedMatches(user.id)
  );

  if (isLoading) return <Spinner />;

  if (error) {
    dispatch(errorNotification("Error on retreiving requested matches"));
    return (
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">
          Requested Matches
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
            <MatchUserBox index={index} match={data}>
              <div className="row mt-1 text-lg">
                <div className="col text-center">
                  <DeclineButton />
                </div>
              </div>
            </MatchUserBox>
          );
        })}
      </div>
    </div>
  );
};

export default RequestedMatches;
