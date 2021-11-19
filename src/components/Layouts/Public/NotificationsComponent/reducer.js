import { SUCCESS_NOTIFICATION, ERROR_NOTIFICATION, RESET_NOTIFICATION } from "./actions";

export const initialState = {
    info: {
        message: null,
        type: null,
    }
};

export default function notificationReducer(state = initialState, actions) {
    switch (actions.type) {
        case SUCCESS_NOTIFICATION:
            return {
                ...state, info: {
                    type: 'success', message: actions.payload
                }
            };
        case ERROR_NOTIFICATION: {
            return {
                ...state, info: {
                    type: 'error', message: actions.payload
                }
            };
        }
        case RESET_NOTIFICATION: {
            return {
                info: {
                    message: null,
                    type: null,
                }
            };
        }
        default:
            return state;
    }
};