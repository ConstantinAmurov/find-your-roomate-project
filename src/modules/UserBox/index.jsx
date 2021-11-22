import React from "react";

import { ImUser } from "react-icons/im";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { browserRedirect } from "../../helpers/helpers";

const UserBox = ({ data, index }) => {
  return (
    <div
      key={index}
      className="rounded-md bg-blue-500 text-white col-2 m-8 ml-0 p-4"
    >
      <h1 className="text-center text-3xl font-bold">{data.name}</h1>
      <div className="row mt-3">
        <div className="col">
          <ImUser className="text-9xl" />
        </div>
        <div className="col flex align-items-center  text-center  justify-center">
          <div className="text-xl">
            <h1 className="text-2xl font-bold">{data.matchPercentage} %</h1>
            <span>Match</span>
          </div>
        </div>
      </div>
      <div className="row mt-4 text-xl">
        <div className="col text-center">
          <button className="  flex-row justify-between p-2 rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors transform">
            <AiFillCheckCircle className="text-5xl m-auto" />
            <p>Send Request</p>
          </button>
        </div>
        <div className="col text-center">
          <button className="  flex-row justify-between p-2 rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors transform">
            <AiFillCloseCircle className="text-5xl m-auto" />
            <p>Decline match</p>
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <button
          onClick={() => browserRedirect(`user/${data.id}`)}
          className="m-auto font-bold p-2 rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors transform"
        >
          View profile
        </button>
      </div>
    </div>
  );
};

export default UserBox;
