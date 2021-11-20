import { all } from "redux-saga/effects";
import loginSaga from "../Login/saga";

import forgotPasswordSaga from "../ForgotPassword/saga";
import resetPasswordSaga from "../ResetPassword/saga";
export function* mainSaga() {
  yield all([
    loginSaga(),
    forgotPasswordSaga(),
    resetPasswordSaga(),
  ]);
}
