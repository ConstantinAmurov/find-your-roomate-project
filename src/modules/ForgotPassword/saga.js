import { put, all, call, takeLatest } from "redux-saga/effects";
import { request } from "../../helpers/requests";
import { browserRedirect } from "../../helpers/helpers";
import { urls } from "../../helpers/urls";
import {
  FORGOT_PASSWORD_REQUESTING,
  forgotPasswordError,
  forgotPasswordSuccess,
} from "./actions";

//Forgot password API call
function forgotPasswordCall(payload) {
  return request("post", urls.LOGIN_URL, payload);
}

// Forgot Password Worker
function* forgotPasswordWorker({ payload }) {
  try {
    let response = yield call(forgotPasswordCall, payload);
    yield put(forgotPasswordSuccess());
    console.log(response);

    yield call(browserRedirect, "/");
  } catch (err) {
    yield put(forgotPasswordError(err.response.data));
  }
}

// Forgot Password  Watcher
export default function* forgotPasswordSaga() {
  yield all([takeLatest(FORGOT_PASSWORD_REQUESTING, forgotPasswordWorker)]);
}
