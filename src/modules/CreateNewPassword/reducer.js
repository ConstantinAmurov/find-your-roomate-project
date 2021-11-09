import {
  CREATE_NEW_PASSWORD_ERROR,
  CREATE_NEW_PASSWORD_INIT,
  CREATE_NEW_PASSWORD_REQUESTING,
  CREATE_NEW_PASSWORD_SUCCESS,
} from "./actions";

export const initialState = {
  password: "",
  repeatPassword: "",
  requesting: false,
  successful: false,
  messages: [],
  errors: {},
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case CREATE_NEW_PASSWORD_INIT:
      return { ...state, errors: {}, successful: false, requesting: false };
    case CREATE_NEW_PASSWORD_REQUESTING:
      return { ...state, requesting: true };
    case CREATE_NEW_PASSWORD_SUCCESS:
      return { ...state, successful: true };
    case CREATE_NEW_PASSWORD_ERROR:
      return { ...state, successful: false, errors: { ...actions.error } };
    default:
      return state;
  }
}
