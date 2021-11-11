import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_INIT,
  FORGOT_PASSWORD_REQUESTING,
} from "./actions";

export const initialState = {
  email: "",
  requesting: false,
  successful: false,
  messages: [],
  errors: {},
};

export default function forgotReducer(state = initialState, actions) {
  switch (actions.type) {
    case FORGOT_PASSWORD_INIT:
      return { ...state, errors: {}, successful: false };
    case FORGOT_PASSWORD_REQUESTING:
      return { ...state, requesting: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, successful: true };
    case FORGOT_PASSWORD_ERROR:
      return { ...state, successful: false, errors: { ...actions.error } };
    default:
      return state;
  }
}
