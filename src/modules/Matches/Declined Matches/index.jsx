import React from "react";

import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { getDeclinedMatches } from "api/Matches API";
import { getLocalUser } from "helpers/helpers";

import MatchUserBox from "modules/UserBox/MatchUserBox";
import { errorNotification } from "components/Layouts/Public/NotificationsComponent/actions";

import Spinner from "components/Spinner/Spinner";

const DeclinedMatches = () => {
  const user = getLocalUser();
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery(
    "declinedMatches",
    () => getDeclinedMatches(user.id)
  );

  if (isLoading) return <Spinner />;

  if (error) {
    dispatch(errorNotification("Error on retreiving requested matches"));
    return (
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">
          Declined Matches
        </h1>
      </div>
    );
  }

  return (
    <div className="m-16 container">
      <h1 className="text-blue-500 text-3xl font-bold row">Declined Matches</h1>
      <div className="row">
        {data.map((data, index) => {
          return (
            <MatchUserBox index={index} match={data}>
              <div className="row mt-1 text-lg"></div>
            </MatchUserBox>
          );
        })}
      </div>
    </div>
  );
};

export default DeclinedMatches;
