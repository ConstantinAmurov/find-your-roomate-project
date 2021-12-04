import React from "react";
import AddPropertyForm from "./AddPropertyForm";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { addRoom } from "api/Rooms API";
import Asset from "assets/Property.jpg";

import {
  successNotification,
  errorNotification,
} from "components/Layouts/Public/NotificationsComponent/actions";
import { getLocalUser, refreshUser } from "helpers/helpers";

const AddProperty = () => {
  const dispatch = useDispatch();
  const { mutate } = useMutation(addRoom);
  const onSubmit = (values) => {
    mutate(
      {
        id: getLocalUser().id,
        values: values,
      },
      {
        onSuccess: () => {
          dispatch(successNotification("Successfully added new property"));
        },
        onError: () =>
          dispatch(errorNotification("Error on adding new property")),
      }
    );
  };
  return (
    <div className="p-20">
      <div className="h-full bg-gray-100 rounded-lg p-5">
        <div className="row">
          <div className="col-5">
            <h1 className="text-blue-500 text-4xl font-bold">Add Property</h1>
            <p className="text-blue-500 text-2xl mt-4 mb-14">
              Fill out the form to add your new property
            </p>
            <AddPropertyForm onSubmit={onSubmit} />
          </div>
          <div className="offset-1 col-6 flex align-items-center">
            <img src={Asset} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
