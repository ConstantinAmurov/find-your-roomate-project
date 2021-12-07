import React from "react";

import { ImUser } from "react-icons/im";

import { browserRedirect } from "../../helpers/helpers";

const UserBox = ({ data, index, children }) => {
  return (
    <div
      key={index}
      className="rounded-md bg-blue-500 text-white m-8 col-3 p-4 "
    >
      <h1 className="text-center text-3xl font-bold h-14 max-h-14">
        {data.name}
      </h1>
      <div className="row mt-3">
        <div className="col">
          <ImUser className="text-9xl" />
        </div>
        <div className="col flex align-items-center  text-center  justify-center">
          <div className="text-xl">
            <h1 className="text-2xl font-bold">{data.similarity} %</h1>
            <span>Match</span>
          </div>
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

export default UserBox;
