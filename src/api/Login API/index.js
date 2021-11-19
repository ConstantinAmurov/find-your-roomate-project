
import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

export const login = async (values) => {
    try {
        const { data } = await request('post', urls.LOGIN_URL, values, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};