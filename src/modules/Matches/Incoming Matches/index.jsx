import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import MatchUserBox from "../../UserBox/MatchUserBox";
import Spinner from "../../../components/Spinner/Spinner";
import DeclineButton from "../../../components/Layouts/Private/RejectButton";

import { acceptRequest, getPendingMatches } from "../../../api/Matches API";

import {
  errorNotification,
  successNotification,
} from "../../../components/Layouts/Public/NotificationsComponent/actions";
import { getLocalUser } from "helpers/helpers";
import { declineRequest } from "../../../api/Matches API";
import AcceptButton from "components/Layouts/Private/AcceptButton";

const IncomingMatches = () => {
  const user = getLocalUser();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery("incomingMatches", () =>
    getPendingMatches(user.id)
  );

  const acceptRequestMutation = useMutation(acceptRequest);
  const declineRequestMutation = useMutation(declineRequest);

  const onDeclineRequest = (id) => {
    declineRequestMutation.mutate(id, {
      onSuccess: async () => {
        queryClient.invalidateQueries("incomingMatches");
        dispatch(successNotification("Declined match successfuly"));
      },
      onError: () => dispatch(errorNotification("Error on declining match")),
    });
  };
  const onAcceptMatch = (id) => {
    acceptRequestMutation.mutate(id, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("incomingMatches");
        dispatch(successNotification("Send request successfuly"));
        // queryClient.setQueryData("potentialMatch", (oldData) => {
        //   return oldData.filter((data) => data.id !== values.receiver_id);
        // });
      },
      onError: () => {
        dispatch(errorNotification("Error on accepting match"));
      },
    });
  };

  if (isLoading) return <Spinner />;

  if (error) {
    dispatch(errorNotification("Error on retreiving Incoming matches"));
    return (
      <div className="container m-16">
        <h1 className="text-blue-500 text-3xl font-bold -ml-3">
          Incoming Matches
        </h1>
      </div>
    );
  }

  return (
    <div className="container m-16">
      <h1 className="text-blue-500 text-3xl font-bold -ml-3">
        Incoming Matches
      </h1>
      <div className="row">
        {data.length > 0 ? (
          data.map((data, index) => {
            return (
              <MatchUserBox index={index} match={data}>
                <div className="row mt-1 text-lg">
                  <div className="col text-center">
                    <AcceptButton onClick={() => onAcceptMatch(data.id)} />
                  </div>
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
          <h1 className="text-blue-500 text-2xl  mt-6">
            You don't have any incoming match
          </h1>
        )}
      </div>
    </div>
  );
};

export default IncomingMatches;
