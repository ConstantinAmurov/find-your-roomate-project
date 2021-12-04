import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { getRooms } from "../../api/Rooms API";
import { errorNotification } from "../../components/Layouts/Public/NotificationsComponent/actions";
import Spinner from "../../components/Spinner/Spinner";
import RoomBox from "../RoomBox";
import SearchBar from "./SearchBar";

const Rooms = () => {
  const { isLoading, error, data } = useQuery("rooms", getRooms);
  const dispatch = useDispatch();
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
          {data.map((data, index) => {
            return (
              <RoomBox index={index} data={data}>
                <div className="row mt-1 text-lg">
                  <div className="col text-center"></div>
                </div>
              </RoomBox>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Rooms;
