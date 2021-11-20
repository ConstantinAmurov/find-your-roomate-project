import {
  REGISTER_PAGE_INIT,
  REGISTER_ERROR,
  REGISTER_REQUESTING,
  REGISTER_SUCCESS,
} from "./actions";


// The initial state of the Login Reducer
export const initialState = {
  id: "",
  password: "",
  requesting: false,
  successful: false,
  messages: [],
  errors: {},
  user: {},
  otp_errors: {},
  confirm_email: "",
  resend_success: {},
};

export default function registerReducer(state = initialState, actions) {
  switch (actions.type) {
    case REGISTER_PAGE_INIT:
      return { ...state, errors: {} };
    case REGISTER_REQUESTING:
      return { ...state, requesting: true };
    case REGISTER_SUCCESS:
      return { ...state, requesting: false, successful: true, errors: {} };
    case REGISTER_ERROR:
      return {
        ...state,
        requesting: false,
        successful: false,
        errors: { ...actions.error },
      };

    default:
      return state;
  }
}
