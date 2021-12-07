import React from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import {
  successNotification,
  errorNotification,
} from "components/Layouts/Public/NotificationsComponent/actions";

import Spinner from "components/Spinner/Spinner";
import { getLocalUser, refreshUser } from "helpers/helpers";
import RoomBox from "modules/RoomBox";
import { deleteRoom } from "api/Rooms API";
import { browserRedirect } from "helpers/helpers";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { mutate, isLoading, error } = useMutation(deleteRoom);

  const onSubmit = (id) => {
    mutate(id, {
      onSuccess: async () => {
        dispatch(successNotification("Deleted room successfuly"));
        window.location.reload();
      },
      onError: () => dispatch(errorNotification("Error on reset password")),
    });
  };

  const user = getLocalUser();
  if (isLoading) return <Spinner />;

  if (error) {
    dispatch(errorNotification("Error on retreiving matched matches"));
    return (
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">
          Your Properties
        </h1>
      </div>
    );
  }

  return (
    <div className="m-16 container">
      <h1 className="text-blue-500 text-3xl font-bold row">Your Properties</h1>

      <div className="row">
        {user.rooms.length>0 ? (
          user.rooms.map((data, index) => {
            return (
              <RoomBox index={index} data={data}>
                <div className="row mt-2">
                  <button
                    onClick={() => onSubmit(data.id)}
                    className="m-auto font-bold p-2 rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors transform"
                  >
                    Delete Room
                  </button>
                </div>
              </RoomBox>
            );
          })
        ) : (
          <h1 className="text-blue-500 text-2xl  mt-7">
            You don't have properties yet
          </h1>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
