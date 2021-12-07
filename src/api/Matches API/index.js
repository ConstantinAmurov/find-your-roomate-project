import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";



export const getPendingMatches = async (values) => {
    try {

    }
    catch (error) {
        throw Error(error);
    }
};
export const getAcceptedMatches = async (id) => {
    try {
        const { data } = await request('get', `${urls.GET_ACCEPTED_MATCHES}/${id}`, null, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};

export const getIncomingMatches = async (values) => {
    try {

    }
    catch (error) {
        throw Error(error);
    }
};
export const getRequestedMatches = async (id) => {
    try {
        const { data } = await request('get', `${urls.GET_REQUESTED_MATCHES}/${id}`, null, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};

export const getPotentialMatches = async (id) => {
    try {
        const { data } = await request('get', `${urls.GET_POTENTIAL_MATCHES}/${id}`, null, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};
export const acceptRequest = async (id) => {
    try {
        const { data } = await request('get', `${urls.ACCEPT_REQUEST}/${id}`, null, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }

};

export const declineRequest = async (id) => {
    try {
        const { data } = await request('get', `${urls.DECLINE_REQUEST}/${id}`, null, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }

};


export const sendRequest = async (values) => {
    try {
        const { data } = await request('post', urls.SEND_REQUEST, values, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};
