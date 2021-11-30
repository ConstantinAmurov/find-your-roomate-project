import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { ImUser } from "react-icons/im";

import Info from "./Info";
import { getUser } from "api/Users API";

import Spinner from "components/Spinner/Spinner";
import { errorNotification } from "components/Layouts/Public/NotificationsComponent/actions";

import CommonPassionsList from "./Common Passions";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery(`user[${id}]`, () => getUser(id));

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
  debugger;
  return (
    <>
      <div className="m-16 text-blue-600">
        <div className="row">
          <div className="col-3 text-center">
            <ImUser className="w-64 h-64 m-auto" />
            <h1 className="text-2xl font-bold mt-3">Match Percentage:</h1>{" "}
            <span className="mt-4 text-4xl">20 %</span>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <Info label="Name" text={data.name} />
                <Info label="Date of Birth" text={data["birthday"]} />
              </div>
              <div className="col">
                <Info label="Gender" text={data["gender"]} />
              </div>
            </div>
            <div className="row mt-20">
              <div className="col-12">
                <Info label="About me" text="I'm looking for an apartment" />
                <div className="row mt-4">
                  <div className="col ">
                    <Info label="City" text={data.city} />
                  </div>
                  <div className="col">
                    <Info label="Country" text={data.country} />
                  </div>
                  <div className="col">
                    <Info label="Budget" text={`${data.max_rent} euro`} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-20">
              <div className="col-12 ">
                {/* <CommonPassionsList data={data.passions} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
