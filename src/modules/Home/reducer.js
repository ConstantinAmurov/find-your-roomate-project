// The initial state of the Dashboard Reducer
import { TOGGLE_SIDEBAR } from "./actions";

export const initialState = {
    isSidebarOpen: false,
};

export default function dashboardReducer(state = initialState, actions) {
    switch (actions.type) {

        case TOGGLE_SIDEBAR: {
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            };
        }
        default:
            return state;
    }
}