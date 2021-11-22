import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

export const register = async (values) => {
    try {
        const { data } = await request('post', urls.REGISTER_URL, values, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};