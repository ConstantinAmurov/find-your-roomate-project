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

export const getRoom = async (values) => {
    try {
        const { data } = await request('get', `${urls.GET_ROOM}/${values.id}`, values, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }

};