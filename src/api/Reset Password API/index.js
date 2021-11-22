import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";


export const resetPassword = async (values) => {

    try {
        const { data } = await request('post', urls.RESET_PASSWORD_URL, values, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};