import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { getRooms } from "../../api/Rooms API";
import {
  errorNotification,
  successNotification,
} from "../../components/Layouts/Public/NotificationsComponent/actions";
import Spinner from "../../components/Spinner/Spinner";
import RoomBox from "../RoomBox";
import SearchBar from "./SearchBar";

import { requestRoom } from "../../api/Rooms API";
import { useMutation } from "react-query";
import { BiMailSend } from "react-icons/bi";
import { getLocalUser } from "helpers/helpers";

const Rooms = () => {
  const { isLoading, error, data } = useQuery("rooms", getRooms);

  const { mutate } = useMutation(requestRoom);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (data) => {
        dispatch(successNotification("Notification sent successfully"));
      },
      onError: () => {
        dispatch(errorNotification("Error on logging in"));
      },
    });
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    dispatch(errorNotification("Error getting your rooms"));
  }
  return (
    <>
      <SearchBar />
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">
          Find your room
        </h1>
        <div className="row">
          {data.length > 1 ? (
            data.map((data, index) => {
              return (
                <RoomBox index={index} data={data}>
                  <div className="row mt-2">
                    <button
                      onClick={() =>
                        onSubmit({
                          room_id: data.id,
                          owner_id: data.user_id,
                          user_id: getLocalUser().id,
                        })
                      }
                      className="m-auto font-bold text-2xl p-2 rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors transform flex"
                    >
                      <BiMailSend className="text-3xl mr-2" />
                      Send request
                    </button>
                  </div>
                </RoomBox>
              );
            })
          ) : (
            <p className="text-blue-500 text-2xl  mt-4">
              There are no available rooms for search
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Rooms;
