export const FORGOT_PASSWORD_REQUESTING = "FORGOT_PASSWORD_REQUESTING";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const FORGOT_PASSWORD_INIT = "FORGOT_PASSWORD_INIT";

export const forgotPasswordRequest = (payload) => ({
  type: FORGOT_PASSWORD_REQUESTING,
  payload,
});

export const forgotPasswordInit = () => ({
  type: FORGOT_PASSWORD_INIT,
});

export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordError = (error) => ({
  type: FORGOT_PASSWORD_ERROR,
  error,
});
