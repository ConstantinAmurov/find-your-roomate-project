import React from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { getPendingMatches } from "api/Matches API";
import { errorNotification } from "components/Layouts/Public/NotificationsComponent/actions";
import Spinner from "components/Spinner/Spinner";

import AcceptButton from "components/Layouts/Private/AcceptButton";
import DeclineButton from "components/Layouts/Private/RejectButton";
import UserBox from "modules/UserBox";
import { getUser } from "api/Users API";
const UserDashboard = (props) => {
  const dispatch = useDispatch();
  const id = 2;

  const { isLoading, error, data } = useQuery(["pendingMatch", id], () =>
    getUser(id)
  );
  if (isLoading) return <Spinner />;

  if (error) {
    dispatch(errorNotification("Error on retreiving matched matches"));
    return (
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">
          Matched Users
        </h1>
      </div>
    );
  }
  return (
    <div className="m-16 container">
      <h1 className="text-blue-500 text-3xl font-bold row">Matched Users</h1>
      <div className="row">
        {/* {data.map((data, index) => {
          return ( */}
        <UserBox index={1} data={data}>
          <div className="row mt-1 text-lg">
            <div className="col text-center">
              <AcceptButton />
            </div>
            <div className="col text-center">
              <DeclineButton />
            </div>
          </div>
        </UserBox>
        {/* ); })} */}
      </div>
    </div>
  );
};

export default UserDashboard;
