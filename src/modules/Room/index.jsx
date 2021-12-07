import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { getRoom } from "../../api/Rooms API";
import { MdOutlineBedroomParent } from "react-icons/md";
import Info from "../User/Info";
import Spinner from "../../components/Spinner/Spinner";
import { errorNotification } from "../../components/Layouts/Public/NotificationsComponent/actions";

const Room = ({ children }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery(["room", id], () => getRoom(id));
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    dispatch(errorNotification("Error at getting room"));
  }

  return (
    <div className="m-16 text-blue-600">
      <div className="row">
        <div className="col-3 text-center">
          <MdOutlineBedroomParent className="w-64 h-64 m-auto" />
          <h1 className="text-2xl font-bold mt-3">Rent Price:</h1>{" "}
          <span className="mt-4 text-4xl"> {data.rent} euro</span>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col">
              <Info label="Country" text={data.country} />
              <Info label="City" text={data.city} />
            </div>
            <div className="col">
              <Info label="Number of rooms" text={data.number_of_rooms} />
            </div>
          </div>
          <div className="row mt-20">
            <div className="col-12">
              <Info
                label="Info"
                text="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
              />
            </div>
          </div>
          <div className="row mt-20">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Room;
