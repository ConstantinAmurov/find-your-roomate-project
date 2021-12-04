
import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

export const getUser = async (id) => {
    try {
        const { data } = await request('get', `${urls.GET_USER}/${id}`, null, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};

export const getOwner = async (id) => {
    try {
        const { data } = await request('get', `${urls.GET_OWNER}/${id}`, null, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};