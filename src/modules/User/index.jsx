import React from "react";
import { useParams } from "react-router";

import { ImUser } from "react-icons/im";

import Info from "./Info";
import CommonPassionsList from "./Common Passions";
const users = require("../Dashboard/dummyData").users;

const User = () => {
  const { id } = useParams();

  const user = users.filter((user) => user.id === id);

  return (
    <>
      <div className="m-16 text-blue-600">
        <div className="row">
          <div className="col-3 text-center">
            <ImUser className="w-64 h-64 m-auto" />
            <h1 className="text-2xl font-bold mt-3">Match Percentage:</h1>{" "}
            <span className="mt-4 text-4xl">{user[0].matchPercentage} %</span>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <Info label="Name" text={user[0].name} />
                <Info
                  label="Date of Birth"
                  text={user[0]["dateOfBirth"].toDateString()}
                />
              </div>
              <div className="col">
                <Info label="Gender" text={user[0]["gender"]} />
              </div>
            </div>
            <div className="row mt-20">
              <div className="col-12">
                <Info label="About me" text="I'm looking for an apartment" />
                <div className="row mt-4">
                  <div className="col ">
                    <Info label="City" text={user[0].city} />
                  </div>
                  <div className="col">
                    <Info label="Country" text={user[0].country} />
                  </div>
                  <div className="col">
                    <Info label="Budget" text={`${user[0].budget} euro`} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-20">
              <div className="col-12 ">
                <CommonPassionsList data={user[0].commonPassions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
