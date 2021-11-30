import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";


export const getRooms = async (values) => {

    try {
        const { data } = await request('get', urls.ALL_ROOM, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};

export const getRoom = async (id) => {
    try {
        debugger;
        const { data } = await request('get', `${urls.GET_ROOM}/${id}`, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }

};

export const addRoom = async ({ id, values }) => {
    try {
        const { data } = await request('post', `${urls.ADD_ROOM}/${id}`, values, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};

export const deleteRoom = async ({ id, values }) => {
    try {
        const { data } = await request('post', `${urls.DELETE_ROOM}/${id}`, values, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};