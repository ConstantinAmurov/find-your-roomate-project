import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { errorNotification } from "components/Layouts/Public/NotificationsComponent/actions";

import Spinner from "components/Spinner/Spinner";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery('properties', () => {});

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
      <h1 className="text-blue-500 text-3xl font-bold row">Your Properties</h1>
      <div className="row"></div>
    </div>
  );
};

export default AdminDashboard;
