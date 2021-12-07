import React from "react";
import { useDispatch } from "react-redux";
import { useQuery, useQueryClient } from "react-query";

import { getAcceptedMatches } from "../../api/Matches API";
import MatchUserBox from "../UserBox/MatchUserBox";
import Spinner from "../../components/Spinner/Spinner";
import DeclineButton from "../../components/Layouts/Private/RejectButton";

import {
  errorNotification,
  successNotification,
} from "../../components/Layouts/Public/NotificationsComponent/actions";
import { getLocalUser } from "helpers/helpers";
import { getUser } from "api/Users API";
import { useMutation } from "react-query";
import { declineRequest } from "../../api/Matches API";

const Matches = () => {
  const user = getLocalUser();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery("acceptedMatches", () =>
    getAcceptedMatches(user.id)
  );
  const { mutate } = useMutation(declineRequest);

  if (isLoading) return <Spinner />;

  const onDeclineRequest = (id) => {
    mutate(id, {
      onSuccess: async () => {
        queryClient.invalidateQueries("acceptedMatches");
        dispatch(successNotification("Declined match successfuly"));
      },
      onError: () => dispatch(errorNotification("Error on declining match")),
    });
  };

  if (error) {
    dispatch(errorNotification("Error on retreiving your matched users"));
    return (
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">My matches</h1>
      </div>
    );
  }
  return (
    <div className="m-16 container">
      <h1 className="text-blue-500 text-3xl font-bold row">My Matches</h1>
      <div className="row">
        {data.length > 0 ? (
          data.map((data, index) => {
            return (
              <MatchUserBox index={index} match={data}>
                <div className="row mt-1 text-lg">
                  <div className="col text-center">
                    <DeclineButton
                      onClick={() => {
                        onDeclineRequest(data.id);
                      }}
                    />
                  </div>
                </div>
              </MatchUserBox>
            );
          })
        ) : (
          <h1 className="text-blue-500 text-xl  mt-5">
            You did not match yet, why not try and send a request
          </h1>
        )}
      </div>
    </div>
  );
};

export default Matches;
