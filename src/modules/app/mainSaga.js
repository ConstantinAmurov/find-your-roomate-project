import { all } from "redux-saga/effects";
import loginSaga from "../Login/saga";
import registerSaga from "../Register/saga";
import forgotPasswordSaga from "../ForgotPassword/saga";
export function* mainSaga() {
  yield all([loginSaga(), registerSaga(), forgotPasswordSaga()]);
}
