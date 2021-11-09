import { put, all, call, takeLatest } from "redux-saga/effects";
import { request } from "../../helpers/requests";
import { browserRedirect } from "../../helpers/helpers";
import { urls } from "../../helpers/urls";
import {
  CREATE_NEW_PASSWORD_REQUESTING,
  createNewPasswordSuccess,
  createNewPasswordError,
} from "./actions";

//Forgot password API call
function createNewPasswordCall(payload) {
  return request("post", urls.LOGIN_URL, payload);
}

// Forgot Password Worker
function* createNewPasswordWorker({ payload }) {
  try {
    let response = yield call(createNewPasswordCall, payload);
    yield put(createNewPasswordSuccess());
    yield call(browserRedirect, "/");
  } catch (err) {
    yield put(createNewPasswordError(err.response.data));
  }
}

// Forgot Password  Watcher
export default function* createNewPasswordSaga() {
  yield all([
    takeLatest(CREATE_NEW_PASSWORD_REQUESTING, createNewPasswordWorker),
  ]);
}
