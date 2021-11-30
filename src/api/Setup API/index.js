import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

export const setupAccount = async ({ id, values }) => {

    try {
        const { data } = await request('post', `${urls.SETUP_ACCOUNT}/${id}`, values, null);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};