import axios from "axios";

import { urls } from "../../helpers/urls";


const API_ROOT = process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;


export const forgotPassword = async (values) => {
    try {
        debugger;
        const { data } = await axios.post(API_ROOT + urls.FORGOT_PASSWORD_URL, values);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};