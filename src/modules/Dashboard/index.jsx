import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getPendingMatches } from "../../api/Matches API";
import { errorNotification } from "../../components/Layouts/Public/NotificationsComponent/actions";
import Spinner from "../../components/Spinner/Spinner";
import UserBox from "../UserBox";

import AcceptButton from "../../components/Layouts/Private/AcceptButton";
import DeclineButton from "../../components/Layouts/Private/RejectButton";
const Home = () => {
  const id = 1;
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery(`pendingMatches[${id}]`, () =>
    getPendingMatches(id)
  );
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
  return (
    <div className="m-16 container">
      <h1 className="text-blue-500 text-3xl font-bold row">Matched Users</h1>
      <div className="row">
        {data.map((data, index) => {
          return (
            <UserBox index={index} data={data}>
              <div className="row mt-1 text-lg">
                <div className="col text-center">
                  <AcceptButton />
                </div>
                <div className="col text-center">
                  <DeclineButton />
                </div>
              </div>
            </UserBox>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
