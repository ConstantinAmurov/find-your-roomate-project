import React from "react";
import UserBox from "../UserBox";

const Home = () => {
  const users = require("./dummyData").users;
  return (
    <div className="m-16">
      <h1 className="text-blue-500 text-3xl font-bold -ml-3">Matched Users</h1>
      <div className="row justify-between">
        {users.map((data, index) => {
          return <UserBox index={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Home;
