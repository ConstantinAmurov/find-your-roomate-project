export const CREATE_NEW_PASSWORD_REQUESTING = "CREATE_NEW_PASSWORD_REQUESTING";
export const CREATE_NEW_PASSWORD_SUCCESS = "CREATE_NEW_PASSWORD_SUCCESS";
export const CREATE_NEW_PASSWORD_ERROR = "CREATE_NEW_PASSWORD_ERROR";
export const CREATE_NEW_PASSWORD_INIT = "CREATE_NEW_PASSWORD_INIT";

export const createNewPasswordRequest = (payload) => ({
  type: CREATE_NEW_PASSWORD_REQUESTING,
  payload,
});

export const createNewPasswordInit = () => ({
  type: CREATE_NEW_PASSWORD_INIT,
});

export const createNewPasswordSuccess = () => ({
  type: CREATE_NEW_PASSWORD_SUCCESS,
});

export const createNewPasswordError = (error) => ({
  type: CREATE_NEW_PASSWORD_ERROR,
  error,
});
