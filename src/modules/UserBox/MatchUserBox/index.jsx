import React from "react";

import { ImUser } from "react-icons/im";

import { browserRedirect } from "helpers/helpers";

import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getUser } from "api/Users API";
import Spinner from "components/Spinner/Spinner";
import { errorNotification } from "components/Layouts/Public/NotificationsComponent/actions";
const MatchUserBox = ({ match, index, children }) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useQuery(
    ["user", match.receiver_id],
    () => getUser(match.receiver_id)
  );

  if (isLoading) return <Spinner />;

  if (isError) {
    dispatch(errorNotification("Error in getting user"));
  }
  return (
    <div
      key={index}
      className="rounded-md bg-blue-500 text-white m-8 col-3 p-4 "
    >
      <h1 className="text-center text-3xl font-bold h-14 max-h-14">
        {data.name}
      </h1>
      <div className="row mt-3">
        <div className="col flex justify-center">
          <ImUser className="text-9xl" />
        </div>
      </div>
      <div className="row mt-2">
        <button
          onClick={() => browserRedirect(`user/${data.id}`)}
          className="m-auto font-bold p-2 rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors transform"
        >
          View profile
        </button>
      </div>
      {children}
    </div>
  );
};

export default MatchUserBox;
